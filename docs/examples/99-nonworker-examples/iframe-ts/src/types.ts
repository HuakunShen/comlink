export interface Calculator {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
  fibonacci(n: number, callback: (ret: number) => void): void;
}
