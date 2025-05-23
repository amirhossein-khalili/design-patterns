interface ThemeApplier<T> {
  apply(Report: T): void;
}

interface PDF {
  name: string;
}

interface HTML {
  tag: string;
}

class DarkTheme<T> implements ThemeApplier<T> {
  apply(report: T): void {
    console.log(`${JSON.stringify(report)} is on the dark theme`);
  }
}

class LightTheme<T> implements ThemeApplier<T> {
  apply(Report: T): void {
    console.log(`${Report} is on the light theme`);
  }
}

abstract class ReportShow<T> {
  _themeApplier: ThemeApplier<T>;

  constructor(themeApplier: ThemeApplier<T>) {
    this._themeApplier = themeApplier;
  }

  abstract show(report: T): void;
}

class PDFReportShow extends ReportShow<PDF> {
  show(report: PDF) {
    this._themeApplier.apply(report);
  }
}

class HTMLReportShow extends ReportShow<HTML> {
  show(report: HTML) {
    this._themeApplier.apply(report);
  }
}

const darkTheme = new DarkTheme<PDF>();
const pdfDarkReport = new PDFReportShow(darkTheme);
pdfDarkReport.show({ name: "ye ketab" });
