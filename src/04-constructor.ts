export class MyDate {
  //In the constructor, we can assign default values to the parameters and access them directly

  private limitAge = new Date().getFullYear() - 100; // Limit age to 100 years

  constructor(
    private day: number = 1,
    private month: number = 1,
    private year: number = new Date().getFullYear() - 100
  ) {
  }

  // Add a method to the class

  // Getter and setter
  public get getDay(): number {
    return this.day;
  }
  public set setDay(value: number) {
    if (value < 1 || value > 31) {
      throw new Error('Invalid day');
    }
    if (
      (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) &&
      value > 30
    ) {
      throw new Error('Invalid day');
    }
    if (this.month === 2 && this.isLeapYear(this.year) && value > 29) {
      throw new Error('Invalid day');
    }
    if (this.month === 2 && !this.isLeapYear(this.year) && value > 28) {
      throw new Error('Invalid day');
    }
    this.day = value;
  }

  public get getMonth(): number {
    return this.month;
  }
  public set setMonth(value: number) {
    if (value < 1 || value > 12) {
      throw new Error('Invalid month');
    }
    this.month = value;
  }

  public get getYear(): number {
    return this.year;
  }
  public set setYear(value: number) {
    if (value < this.limitAge || value > new Date().getFullYear()) {
      throw new Error('Invalid year');
    }
    this.year = value;
  }

  // Add a method to adjust the date string with zero padding
  myDateFormattedZeroPadded(): string {
    return `${this.day.toString().padStart(2, '0')}/${this.month
      .toString()
      .padStart(2, '0')}/${this.year}`;
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
date.setDay = 31;
console.log(date.myDateFormattedZeroPadded()); // Output: "31/01/1996"
date.setMonth = 2;
console.log(date.myDateFormattedZeroPadded()); // Output: "31/02/1996"
//date.setDay = 31; // Error: Invalid day
//date.setMonth = 13; // Error: Invalid month
date.setYear = 2020;
console.log(date.myDateFormattedZeroPadded()); // Output: "31/02/2020"
date.setYear = 2024; // Output: "31/02/2024"
console.log(date.myDateFormattedZeroPadded()); // Output: "31/02/2024"
date.setYear = 2025; // Error: Invalid year



