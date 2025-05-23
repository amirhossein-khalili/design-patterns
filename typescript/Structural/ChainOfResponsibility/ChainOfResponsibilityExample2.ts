// Log levels
enum LogLevel {
  INFO,
  WARNING,
  ERROR,
}

// Handler interface
abstract class Logger {
  protected next: Logger | null = null;

  setNext(next: Logger): Logger {
    this.next = next;
    return next;
  }

  log(message: string, level: LogLevel) {
    if (this.canHandle(level)) {
      this.writeMessage(message);
    }
    if (this.next) {
      this.next.log(message, level);
    }
  }

  abstract canHandle(level: LogLevel): boolean;
  abstract writeMessage(message: string): void;
}

class InfoLogger extends Logger {
  canHandle(level: LogLevel): boolean {
    return level === LogLevel.INFO;
  }
  writeMessage(message: string): void {
    console.log(`Info: ${message}`);
  }
}

class WarningLogger extends Logger {
  canHandle(level: LogLevel): boolean {
    return level === LogLevel.WARNING;
  }
  writeMessage(message: string): void {
    console.log(`Warning: ${message}`);
  }
}

class ErrorLogger extends Logger {
  canHandle(level: LogLevel): boolean {
    return level === LogLevel.ERROR;
  }
  writeMessage(message: string): void {
    console.log(`Error: ${message}`);
  }
}

// Chain setup
const errorLogger = new ErrorLogger();
const warningLogger = new WarningLogger();
const infoLogger = new InfoLogger();

infoLogger.setNext(warningLogger).setNext(errorLogger);

// Test
infoLogger.log("همه چیز خوب است", LogLevel.INFO); // فقط InfoLogger چاپ می‌کند
infoLogger.log("مشکلی رخ داده", LogLevel.ERROR); // فقط ErrorLogger چاپ می‌کند
infoLogger.log("هشدار! ظرفیت بالا رفته", LogLevel.WARNING); // فقط WarningLogger چاپ می‌کند
