export function LogIO(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`[${propertyKey}] Input:`, args[0]);
    const result = originalMethod.apply(this, args);
    console.log(`[${propertyKey}] Output (state):`);
    return result;
  };

  return descriptor;
}
