/**
 * =====================================================================
 * 🌟 TypeScript Singleton Example 🌟
 * --------------------------------------------------------
 * 📝 Explain: This module demonstrates how to create a Singleton
 * pattern in TypeScript using a static instance.
 *
 * 🚀 Purpose: Maintain a single instance across the app.
 * =====================================================================
 */

//=========================
// 		IMPLEMENTATION
//=========================

export namespace SingletonPattern {
  export class Singleton {
    private static singleton: Singleton;
    /*
     *   constructor is private to can access to it and instantiate the class
     */
    private constructor() {}

    /*
     * this method make us to get instance from class
     */
    public static getInstance(): Singleton {
      if (!Singleton.singleton) {
        Singleton.singleton = new Singleton();
      }
      return Singleton.singleton;
    }
  }
}

//=========================
// 		USAGE
//=========================

export namespace Demo {
  export function show(): void {
    const singleton1 = SingletonPattern.Singleton.getInstance();
    const singleton2 = SingletonPattern.Singleton.getInstance();

    if (singleton1 === singleton2) {
      console.log("two singletons are equivalent");
    } else {
      console.log("two singletons are not equivalent");
    }
  }
}
Demo.show();
