using System;

namespace DesignPatterns.Singleton
{
    public sealed class Singleton
    {
        private static readonly Lazy<Singleton> instance = new Lazy<Singleton>(() => new Singleton());

        // Private constructor to prevent external instantiation
        private Singleton()
        {
            Console.WriteLine("Singleton instance created");
        }

        public static Singleton Instance => instance.Value;

        public void DoSomething()
        {
            Console.WriteLine("Doing something from the singleton instance.");
        }
    }

    public class SingletonExample
    {
        public static void Run()
        {
            Console.WriteLine("Accessing Singleton:");
            Singleton first = Singleton.Instance;
            first.DoSomething();

            Singleton second = Singleton.Instance;
            Console.WriteLine("Same instance? " + (first == second)); // should be true
        }
    }
}
