import { ICar } from "./kazem/ICar";

export class Barbari {
  private car: ICar;

  constructor(car: ICar) {
    this.car = car;
  }

  bar(): string {
    return this.car.moveStreight();
  }

  bargard(): string {
    return this.car.moveBack();
  }
}
