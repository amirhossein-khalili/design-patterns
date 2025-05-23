// تمرین برای Command Pattern
// فرض کن یک ویرایشگر متن داری که دو دستور دارد:

// افزودن یک کاراکتر به انتهای متن

// حذف آخرین کاراکتر

// تمرین:

// یک کلاس Editor داشته باش که متن را نگه می‌دارد

// یک کلاس Invoker داشته باش که Commandها را اجرا کن

interface Command {
  excute();
}

class AddCharacterCommand implements Command {
  excute() {
    throw new Error("Method not implemented.");
  }
}

class RemoveCharacterCommand implements Command {
  excute() {
    throw new Error("Method not implemented.");
  }
}

class Editor {
  private _text: string;

  public get text(): string {
    return this._text;
  }
  public set text(value: string) {
    this._text = value;
  }
}

class SetEditType {
  private command: Command;

  setCommand(command: Command) {
    this.command = command;
  }

  applyEdit() {
    this.command.excute();
  }
}
