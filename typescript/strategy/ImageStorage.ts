export class ImageStorage {
  private filesNames: string[];

  constructor() {
    this.filesNames = [];
  }

  public store(fileName: string): void {
    this.filesNames.push(fileName);
    console.log(this.filesNames);
  }
}
