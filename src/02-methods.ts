export class MyDate {
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
// Add a method to the class

// Formatear la fecha como un string
myDateFormatted(): string {
  return `${this.day}/${this.month}/${this.year}`;
}

// Add a method to adjust the date
myDateAmount(amount: number, type: 'day' | 'month' | 'year'): MyDate {
  switch (type) {
    case 'day':
      return new MyDate(this.day + amount, this.month, this.year);
    case 'month':
      return new MyDate(this.day, this.month + amount, this.year);
    case 'year':
      return new MyDate(this.day, this.month, this.year + amount);
  }
}
}

const date = new MyDate(9, 9, 1975);
console.log(date.myDateFormatted()); // Output: "9/9/1975"
console.log(date.myDateAmount(1, 'day').myDateFormatted()); // Output: "10/9/1975"
console.log(date.myDateAmount(1, 'month').myDateFormatted()); // Output: "9/10/1975"
console.log(date.myDateAmount(1, 'year').myDateFormatted()); // Output: "9/9/1976"
console.log(`Day: ${date.day}`); // Output: "Day: 9"
console.log(`Month: ${date.month}`); // Output: "Month: 9"
console.log(`Year: ${date.year}`); // Output: "Year: 1975"



