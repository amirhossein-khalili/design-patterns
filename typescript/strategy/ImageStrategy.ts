import { ImageCompressor } from "./ImageCompressor";
import { ImageFiltering } from "./ImageFiltering";
import { ImageStorage } from "./ImageStorage";
export class ImageStrategy {
  private _imageCompressor = ImageCompressor;
  private _imageFiltering = ImageFiltering;
  private _ImageStorage = ImageStorage;

  private compressor: string;
  private filter: string;

  constructor(compressor: string, filter: string) {
    this.compressor = compressor;
    this.filter = filter;
  }

  public strategy(fileName: string) {}
}
