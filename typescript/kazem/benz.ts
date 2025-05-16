import { ICar } from "./ICar";

export class BenzCar implements ICar {
  wheel(): string {
    return "Benz car wheels are ready.";
  }

  moveStreight(): string {
    return "Benz car is moving straight.";
  }

  moveBack(): string {
    return "Benz car is moving backward.";
  }

  break(): void {
    console.log("Benz car is braking.");
  }
}

interface IPerson {
  name: string;
  heightInCentimeters: number;
}

type PersonType = {
  name: string;
  heightInCentimeters: number;
};

interface IIrani extends IPerson {
  natCode: number;
}

type IraniType = {
  natCode: number;
};
type IraniPerson = IraniType & PersonType;

const Amir: IIrani = { name: "amir", heightInCentimeters: 180, natCode: 215 };
// const Amir: IraniPerson = { name: "amir", heightInCentimeters: 180, natCode: 215 };

console.log(Amir.name);
