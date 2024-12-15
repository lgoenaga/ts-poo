function getValue<myType>(value: myType): myType {
  return value;

}

getValue(1).toFixed();
getValue('Hello').toUpperCase();
getValue(true).valueOf();

console.log(getValue(1));
console.log(getValue('Hello'));
console.log(getValue(true));

// Forma correcta de usarlo
getValue<number>(1).toFixed();
getValue<string>('Hello').toUpperCase();
getValue<boolean>(true).valueOf();

function getValue2<myType, myType2>(vale:myType, value2: myType2): myType {
  let array: myType2[] = [];
  return vale;

}

getValue2<number, string>(1, 'Hello').toFixed();
getValue2<string, boolean>('Hello', true).toUpperCase();
getValue2<number[], number>([1,2,3], 1).push(4);