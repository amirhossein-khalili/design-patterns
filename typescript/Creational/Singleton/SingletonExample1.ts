class AppConfig {
  private static _instance: AppConfig;
  private _port: number = 0;
  private _apiUrl: string = "google";

  private constructor() {} // ✅ این مهمه!

  public static getInstance() {
    if (!AppConfig._instance) {
      AppConfig._instance = new AppConfig();
    }
    return AppConfig._instance;
  }

  public get apiUrl(): string {
    return this._apiUrl;
  }

  public set apiUrl(value: string) {
    this._apiUrl = value;
  }

  public get port(): number {
    return this._port;
  }

  public set port(value: number) {
    this._port = value;
  }

  public printConfig() {
    console.log(`${this._apiUrl}:${this._port}`);
  }
}

// ✅ تست
const a1 = AppConfig.getInstance();
const a2 = AppConfig.getInstance();

a1.port = 7882;
a1.apiUrl = "localhost.com";

a2.printConfig(); // localhost.com:7882
console.log(a1 === a2); // true ✅
