// ساختار داده خرید
type Purchase = {
  cardValid: boolean;
  balanceSufficient: boolean;
  customerIsAllowed: boolean;
};

// کلاس انتزاعی هندلر
abstract class PurchaseValidator {
  protected next: PurchaseValidator | null = null;

  setNext(handler: PurchaseValidator): PurchaseValidator {
    this.next = handler;
    return handler;
  }

  validate(purchase: Purchase): void {
    if (this.canHandle(purchase)) {
      this.handle(purchase);
    } else if (this.next) {
      this.next.validate(purchase);
    } else {
      console.log("خرید رد شد!");
    }
  }

  abstract canHandle(purchase: Purchase): boolean;
  abstract handle(purchase: Purchase): void;
}

// کارت را بررسی می‌کند
class CardValidator extends PurchaseValidator {
  canHandle(purchase: Purchase): boolean {
    return !purchase.cardValid;
  }
  handle(purchase: Purchase): void {
    console.log("کارت نامعتبر است.");
  }
}

// موجودی را بررسی می‌کند
class BalanceValidator extends PurchaseValidator {
  canHandle(purchase: Purchase): boolean {
    return !purchase.balanceSufficient;
  }
  handle(purchase: Purchase): void {
    console.log("موجودی کافی نیست.");
  }
}

// مشتری را بررسی می‌کند
class CustomerValidator extends PurchaseValidator {
  canHandle(purchase: Purchase): boolean {
    return !purchase.customerIsAllowed;
  }
  handle(purchase: Purchase): void {
    console.log("مشتری اجازه خرید ندارد.");
  }
}

// ساخت زنجیره
const cardValidator = new CardValidator();
const balanceValidator = new BalanceValidator();
const customerValidator = new CustomerValidator();

cardValidator.setNext(balanceValidator).setNext(customerValidator);

// سناریوهای تست

// همه چیز اوکی، هیچکدوم پاسخ نمیدن (پس هیچ پیامی چاپ نمی‌شه)
cardValidator.validate({ cardValid: true, balanceSufficient: true, customerIsAllowed: true });

// کارت نامعتبر
cardValidator.validate({ cardValid: false, balanceSufficient: true, customerIsAllowed: true });
// خروجی: کارت نامعتبر است.

// کارت معتبر، موجودی کافی نیست
cardValidator.validate({ cardValid: true, balanceSufficient: false, customerIsAllowed: true });
// خروجی: موجودی کافی نیست.

// کارت و موجودی اوکی، مشتری اجازه خرید ندارد
cardValidator.validate({ cardValid: true, balanceSufficient: true, customerIsAllowed: false });
// خروجی: مشتری اجازه خرید ندارد.
