export class MyDate {
  private day: number;
  private month: number;
  private year: number;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
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

  // Formatear la fecha como un string
  myDateFormatted(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  private paddingZero(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  MyDateFormattedPaddingZero(): string {
    return `${this.paddingZero(this.day)}/${this.paddingZero(this.month)}/${this.year}`;
  }

  // Add a method to adjust the date string with zero padding
  myDateFormattedZeroPadded(): string {
    return `${this.day.toString().padStart(2, '0')}/${this.month.toString().padStart(2, '0')}/${this.year
      .toString()
      .padStart(4, '0')}`;
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
console.log(date.myDateFormattedZeroPadded()); // Output: "09/09/1975"
console.log(date.MyDateFormattedPaddingZero()); // Output: "09/09/1975"
date.setDay = 10;
date.setMonth = 10;
date.setYear = 1976;
console.log(date.myDateFormatted()); // Output: "10/10/1976"
console.log(`Day: ${date.getDay}`); // Output: "Day: 10"
console.log(`Month: ${date.getMonth}`); // Output: "Month: 10"
console.log(`Year: ${date.getYear}`); // Output: "Year: 1976
console.log(date.myDateFormattedZeroPadded()); // Output: "10/10/1976"
console.log(date.MyDateFormattedPaddingZero()); // Output: "10/10/1976"
