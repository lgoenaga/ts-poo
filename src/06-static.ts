console.log(Math.PI);
console.log(Math.max(1, 2, 3, 4, 5));

class myMath {
  static readonly PI: number = 3.1416;
  static max(...values: number[]): number {
    return values.reduce((maximum, current) => maximum > current ? maximum : current, values[0]);
  }
}

console.log(myMath.PI);
console.log(myMath.max(1, 2, 3, 4, 5));
console.log(myMath.max());
console.log(myMath.max(-1, -2, -3, -4, -5));
console.log('-------------------');


