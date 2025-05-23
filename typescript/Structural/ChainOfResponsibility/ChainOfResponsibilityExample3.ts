// نوع درخواست
enum RequestType {
  SIMPLE,
  MEDIUM,
  COMPLEX,
}

// کلاس انتزاعی هندلر
abstract class SupportHandler {
  protected next: SupportHandler | null = null;

  setNext(handler: SupportHandler): SupportHandler {
    this.next = handler;
    return handler;
  }

  handle(request: RequestType): void {
    if (this.canHandle(request)) {
      this.respond();
    } else if (this.next) {
      this.next.handle(request);
    } else {
      console.log("درخواستی بدون پاسخ ماند!");
    }
  }

  abstract canHandle(request: RequestType): boolean;
  abstract respond(): void;
}

// هندلرها
class Operator extends SupportHandler {
  canHandle(request: RequestType): boolean {
    return request === RequestType.SIMPLE;
  }
  respond(): void {
    console.log("اپراتور: درخواست ساده را پاسخ داد.");
  }
}

class Specialist extends SupportHandler {
  canHandle(request: RequestType): boolean {
    return request === RequestType.MEDIUM;
  }
  respond(): void {
    console.log("کارشناس: درخواست متوسط را پاسخ داد.");
  }
}

class Manager extends SupportHandler {
  canHandle(request: RequestType): boolean {
    return request === RequestType.COMPLEX;
  }
  respond(): void {
    console.log("مدیر: درخواست پیچیده را پاسخ داد.");
  }
}

// ساختن زنجیره
const operator = new Operator();
const specialist = new Specialist();
const manager = new Manager();

operator.setNext(specialist).setNext(manager);

// تست
operator.handle(RequestType.SIMPLE); // خروجی: اپراتور: درخواست ساده را پاسخ داد.
operator.handle(RequestType.MEDIUM); // خروجی: کارشناس: درخواست متوسط را پاسخ داد.
operator.handle(RequestType.COMPLEX); // خروجی: مدیر: درخواست پیچیده را پاسخ داد.
