interface Payment {
  pay(amount: number): void;
}
enum PaymentTypes {
  PayPal,
  CreditCard,
}
class CreditCardPayment implements Payment {
  pay(amount: number): void {
    console.log(`payment with credit card done and this is its amount ${amount}`);
  }
}

class PayPalPayment implements Payment {
  pay(amount: number): void {
    console.log(`payment with paypal done and this is its amount ${amount}`);
  }
}

class PaymentFactory {
  static createPayment(type: PaymentTypes): Payment {
    if (type == PaymentTypes.PayPal) return new PayPalPayment();
    else if (type == PaymentTypes.CreditCard) return new CreditCardPayment();
    else throw new Error("selected type doesnt exist. ");
  }
}

const paymentTool = PaymentFactory.createPayment(PaymentTypes.PayPal);
paymentTool.pay(500);
