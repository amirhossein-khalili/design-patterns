import { ICar } from "./ICar";

export class SaipaCar implements ICar {
  wheel(): string {
    return "Saipa car wheels are ready.";
  }

  moveStreight(): string {
    return "Saipa car is moving straight.";
  }

  moveBack(): string {
    return "Saipa car is moving backward.";
  }

  break(): void {
    console.log("Saipa car is braking.");
  }
}
