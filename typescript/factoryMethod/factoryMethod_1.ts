/**
 * =====================================================================
 * 🌟 TypeScript Factory Method Pattern Example 🌟
 * ---------------------------------------------------------------------
 * 📝 **Overview**:
 *    This implementation follows the **Factory Method Pattern** to
 *    create different file editor instances (`JsonFile`, `XmlFile`)
 *    based on the provided file type.
 *
 * 🚀 **Purpose**:
 *    - Encapsulate object creation logic in factory classes.
 *    - Ensure that each file type gets the appropriate editor.
 *    - Maintain **scalability** by making it easy to add new file types.
 *
 * 🏗 **Architecture**:
 *    1️⃣ `IFile` (Interface): Defines a file with `name()` and `type()`.
 *    2️⃣ `IFileEditor` (Interface): Ensures each file editor has an `edit()` method.
 *    3️⃣ `BaseFactoryFile` (Abstract Class): Defines a **template method** for file creation.
 *    4️⃣ `JsonFile` & `XmlFile` (Concrete Factories): Implement the `make()` method to return
 *        a specific file editor (`Json` or `Xml`).
 *    5️⃣ `Json` & `Xml` (Concrete Products): Provide the `edit()` implementation.
 *
 * 🔄 **How It Works**:
 *    - The **client** provides a file and its format (e.g., `"json"` or `"xml"`).
 *    - The corresponding factory class (`JsonFile` or `XmlFile`) is selected.
 *    - The `callEdit()` method invokes `make()` to create the correct editor instance.
 *    - The `edit()` method is called to process the file.
 *
 * 📝 **Example Usage**:
 * ```typescript
 *  const file: FactoryMethodPattern.IFile = {
 *    name: () => "data.json",
 *    type: () => "json",
 *  };
 *
 *  const editor = new FactoryMethodPattern.JsonFile(file);
 *  editor.callEdit().then(console.log);
 *  ➡️ Output: "Editing JSON file: data.json"
 * ```
 *
 * 🏆 **Benefits of Factory Method Pattern**:
 *    ✅ Provides flexibility in object creation.
 *    ✅ Makes the code **extensible** (easy to add new file types).
 *    ✅ Promotes **separation of concerns** by delegating instantiation.
 *
 * 🌍 **Language**: TypeScript
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
