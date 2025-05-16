export class ImageCompressor {
  constructor() {}

  public compressing(compressor: string) {
    if (compressor == "jpeg") {
      console.log("compressing jpeg");
    } else if (compressor == "png") {
      console.log("compressing png");
    }
  }
}
