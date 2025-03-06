/**
 * =====================================================================
 * 🌟 TypeScript Singleton Example 🌟
 * --------------------------------------------------------
 * This module demonstrates how to create a Singleton
 * pattern in TypeScript using a static instance.
 *
 * 👨‍💻 Author: Your Name
 * 📅 Date: YYYY-MM-DD
 * 🚀 Purpose: Maintain a single instance across the app.
 * =====================================================================
 */

//=========================
// 		IMPLEMENTATION
//=========================

export namespace FactoryMethodPattern {
  export interface IFactoryFileEdit {
    file: IFile;
    make(): Promise<string>;
    callEdit(): Promise<string>;
  }

  export interface IFile {
    name(): string;
    type(): string;
  }

  interface IFileEditor {
    edit(): string;
  }

  export abstract class BaseFactoryFile implements IFactoryFileEdit {
    public file: IFile;

    constructor(file: IFile) {
      this.file = file;
    }

    abstract make(): Promise<string>;

    public async callEdit(): Promise<string> {
      return this.make();
    }
  }

  export class JsonFile extends BaseFactoryFile {
    constructor(file: IFile) {
      super(file);
    }

    async make(): Promise<string> {
      const editor = new Json(this.file);
      return Promise.resolve(editor.edit()); // Ensure it returns a Promise<string>
    }
  }

  export class Json implements IFileEditor {
    public file: IFile;

    constructor(file: IFile) {
      this.file = file;
    }

    edit(): string {
      return `Editing JSON file: ${this.file.name()}`;
    }
  }

  export class XmlFile extends BaseFactoryFile {
    constructor(file: IFile) {
      super(file);
    }

    async make(): Promise<string> {
      const editor = new Xml(this.file);
      return Promise.resolve(editor.edit());
    }
  }

  export class Xml implements IFileEditor {
    public file: IFile;

    constructor(file: IFile) {
      this.file = file;
    }

    edit(): string {
      return `Editing XML file: ${this.file.name()}`;
    }
  }
}

//=========================
// 		USAGE
//=========================

const file: FactoryMethodPattern.IFile = {
  name: () => "document.json",
  type: () => "json",
};

const jsonEditor = new FactoryMethodPattern.JsonFile(file);
jsonEditor.callEdit().then(console.log);

const xmlFile: FactoryMethodPattern.IFile = {
  name: () => "document.xml",
  type: () => "xml",
};

const xmlEditor = new FactoryMethodPattern.XmlFile(xmlFile);
xmlEditor.callEdit().then(console.log);
