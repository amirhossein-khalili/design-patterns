interface Subscriber {
  name: string;
  update(message: string): void;
}

class Messager {
  sendMessage(message: string, subscriber: Subscriber) {
    console.log(`we are sending this message: ${message} to: ${subscriber.name}`);
  }
}

class MeteorologicalSystem {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber) {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  notify(message: string) {
    for (const sub of this.subscribers) {
      sub.update(message);
    }
  }
}

// نمونه سابسکرایبر
class User implements Subscriber {
  constructor(public name: string, private messager: Messager) {}

  update(message: string): void {
    this.messager.sendMessage(message, this);
  }
}

// استفاده:
const messagerService = new Messager();
const metService = new MeteorologicalSystem();

const user1 = new User("amir", messagerService);
const user2 = new User("haj", messagerService);
const user3 = new User("dd", messagerService);

metService.subscribe(user1);
metService.subscribe(user2);
metService.subscribe(user3);

metService.notify("دمای هوا ۳۰ درجه شد!");
