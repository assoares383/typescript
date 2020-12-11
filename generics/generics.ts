// Using generics
function echo<T>(object: T): T {
  return object
}

console.log(echo('Alexandre').length);
console.log(echo<number>(40));
console.log(echo({ name: 'Alexandre', age: 40}));

const rating: Array<number> = [10, 9.3, 7.7];
rating.push(8.4);
//rating.push('5.5');
console.log(rating);

// Array
function print<T>(args: T[]) {
  args.forEach(element => console.log(element));
}

print([1,2,3]);
print<number>([1,2,3]);
print<string>(['Nome 1','Nome 2','Nome 3']);

// class with generics
abstract class Operator<T, R> {
  constructor(
    public operator1: T,
    public operator2: T) {}

  abstract execute(): R
}

// console.log(new Operator('Good ', 'Morning').execute());
// console.log(new Operator(3,7).execute());
// console.log(new Operator(3, ' Opa').execute());

class binarySum extends Operator<number, number> {
  execute(): number {
    return this.operator1 + this.operator2;
  }
}

console.log(new binarySum(10, 20).execute());