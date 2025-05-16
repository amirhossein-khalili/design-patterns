export class ImageFiltering {
  constructor() {}

  public ApplyingFilter(filter: string) {
    if (filter == "b&w") console.log("applying filter");
    else if (filter == "blue") console.log("apply bule filter");
  }
}
