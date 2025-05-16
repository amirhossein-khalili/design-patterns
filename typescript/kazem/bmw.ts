import { ICar } from "./ICar";

export class BmwCar implements ICar {
  wheel(): string {
    return "Bmw car wheels are ready.";
  }

  moveStreight(): string {
    return "Bmw car is moving straight.";
  }

  moveBack(): string {
    return "Bmw car is moving backward.";
  }

  break(): void {
    console.log("Bmw car is braking.");
  }
}
