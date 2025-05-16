import { EditorState } from "./State";

function first() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`[${propertyKey}] Input:`, args);
      const result = originalMethod.apply(this, args);
      console.log(`[${propertyKey}] Output:`, result);
      return result;
    };

    return descriptor;
  };
}

export class Editor {
  private state: EditorState | null = null;

  set State(state: Partial<EditorState>) {
    this.state = { ...this.state, ...state };
  }
  get State(): EditorState | null {
    return this.state;
  }

  @first()
  public test() {}
}
