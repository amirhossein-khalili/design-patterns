interface Input {
  render(): void;
}

interface Button {
  render(): void;
}

interface UIFactory {
  createButton(): Button;
  createInput(): Input;
}

enum UIType {
  Mobile,
  Desktop,
}

class MobileButton implements Button {
  render(): void {
    console.log("i am rendering from MobileButton");
  }
}

class MobileInput implements Input {
  render(): void {
    console.log("i am rendering from MobileInput");
  }
}

class DesktopButton implements Button {
  render(): void {
    console.log("i am rendering from DesktopButton");
  }
}

class DesktopInput implements Input {
  render(): void {
    console.log("i am rendering from DesktopInput");
  }
}

class DesktopUIFactory implements UIFactory {
  createButton(): Button {
    return new DesktopButton();
  }
  createInput(): Input {
    return new DesktopInput();
  }
}

class MobileUIFactory implements UIFactory {
  createButton(): Button {
    return new MobileButton();
  }
  createInput(): Input {
    return new MobileInput();
  }
}

function renderUI(factory: UIFactory) {
  const button = factory.createButton();
  const input = factory.createInput();

  button.render();
  input.render();
}

function getFactory(type: UIType): UIFactory {
  switch (type) {
    case UIType.Mobile:
      return new MobileUIFactory();
    case UIType.Desktop:
      return new DesktopUIFactory();
    default:
      throw new Error("Unsupported UI type");
  }
}

const factory = getFactory(UIType.Desktop);
renderUI(factory);
