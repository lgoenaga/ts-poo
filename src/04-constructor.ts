export class MyDate {
  //In the constructor, we can assign default values to the parameters and access them directly
  constructor(
    private day: number = 1,
    private month: number = 1,
    private year: number = 1924
  ) {}

  // Add a method to the class

  // Getter and setter
  public get getDay(): number {
    return this.day;
  }
  public set setDay(value: number) {
    this.day = value;
  }

  public get getMonth(): number {
    return this.month;
  }
  public set setMonth(value: number) {
    this.month = value;
  }

  public get getYear(): number {
    return this.year;
  }
  public set setYear(value: number) {
    this.year = value;
  }

  // Add a method to adjust the date string with zero padding
  myDateFormattedZeroPadded(): string {
    return `${this.day.toString().padStart(2, '0')}/${this.month
      .toString()
      .padStart(2, '0')}/${this.year.toString().padStart(4, '0')}`;
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

  isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };
  
}

let date= new MyDate();
console.log(date.myDateFormattedZeroPadded()); // Output: "01/01/1924"
date = new MyDate(9, 9, 1975);
console.log(date.myDateFormattedZeroPadded()); // Output: "09/09/1975"
date = new MyDate(undefined,undefined,1996);
console.log(date.myDateFormattedZeroPadded()); // Output: "01/01/1996"
console.log(date.isLeapYear(2020)); // Output: true
console.log(date.isLeapYear(2021)); // Output: false

