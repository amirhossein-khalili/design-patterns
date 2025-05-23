interface PrescriptionItem {
  drug: string;
  quantity: number;
}

abstract class CreatePrescription {
  items: PrescriptionItem[] = [];

  abstract create(items: PrescriptionItem[]);
  abstract addItem(item: PrescriptionItem);
  abstract print();
}

class Insurance extends CreatePrescription {
  create(items: PrescriptionItem[]) {
    this.items = items;
  }
  addItem(item: PrescriptionItem) {
    this.items.push(item);
  }
  print() {
    console.log(this.items);
  }
}

class InsuranceAuthenticated extends CreatePrescription {
  doctorToken: string;
  _mainPrescription: CreatePrescription;

  constructor(mainPrescription: CreatePrescription) {
    super();
    this._mainPrescription = mainPrescription;
  }

  checkDoctorToken() {
    if (!this.doctorToken) throw new Error("not authorized !!");
  }

  login(token: string) {
    this.doctorToken = token;
  }

  create(items: PrescriptionItem[]) {
    this.checkDoctorToken();
    this._mainPrescription.create(items);
  }
  addItem(item: PrescriptionItem) {
    this.checkDoctorToken();
    this._mainPrescription.addItem(item);
  }
  print() {
    this.checkDoctorToken();
    this._mainPrescription.print();
  }
}

const iranBime = new Insurance();
const iranBimeService = new InsuranceAuthenticated(iranBime);

const prsc: PrescriptionItem = { drug: "stminofen", quantity: 2 };
iranBimeService.login("token");
iranBimeService.create([prsc]);
iranBimeService.print();
