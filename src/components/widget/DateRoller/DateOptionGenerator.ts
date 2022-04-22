import range from "../../../common/utils";
import { endOfMonth, isSameDay, isSameMonth, isWithinInterval } from "date-fns";

export type SelectParams = {
  year: number;
  month: number;
  date: number;
};

export default class DateOptionGenerator {
  private readonly selected: SelectParams;

  constructor(private readonly rangeStart: Date, private readonly rangeEnd: Date, initialSelection: Date) {
    this.selected = {
      year: initialSelection.getFullYear(),
      month: initialSelection.getMonth() + 1,
      date: initialSelection.getDate(),
    };
  }

  select(params: Partial<SelectParams>) {
    this.selected.year = params?.year ?? this.selected.year;
    this.selected.month = params?.month ?? this.selected.month;
    this.selected.date = params?.date ?? this.selected.date;

    this.correct();

    return this.selected;
  }

  private correct() {
    this.selected.year = this.fitIn(this.selected.year, this.yearOptions);
    this.selected.month = this.fitIn(this.selected.month, this.monthOptions);
    this.selected.date = this.fitIn(this.selected.date, this.dateOptions);
  }

  private fitIn(value: number, sortedValues: number[]) {
    if (sortedValues.includes(value)) {
      return value;
    }

    if (value < sortedValues[0]) {
      return sortedValues[0];
    }

    if (value > sortedValues[sortedValues.length - 1]) {
      return sortedValues[sortedValues.length - 1];
    }

    return value;
  }

  get selectedValues(): SelectParams {
    return this.selected;
  }

  get yearOptions(): number[] {
    const startYear = this.rangeStart.getFullYear();
    const endYear = this.rangeEnd.getFullYear();

    return range(startYear, endYear);
  }

  get monthOptions(): number[] {
    return range(1, 12).filter((m) => {
      const date = new Date(this.selected.year, m - 1, 1);

      console.log(date);

      return (
        isSameMonth(date, this.rangeStart) ||
        isSameMonth(date, this.rangeEnd) ||
        isWithinInterval(date, {
          start: this.rangeStart,
          end: this.rangeEnd,
        })
      );
    });
  }

  get dateOptions(): number[] {
    return range(1, this.endDateOfSelectedMonth).filter((d) => {
      const date = new Date(this.selected.year, this.selected.month - 1, d);

      return (
        isSameDay(date, this.rangeStart) ||
        isSameDay(date, this.rangeEnd) ||
        isWithinInterval(date, {
          start: this.rangeStart,
          end: this.rangeEnd,
        })
      );
    });
  }

  private get endDateOfSelectedMonth(): number {
    return endOfMonth(new Date(this.selected.year, this.selected.month - 1)).getDate();
  }
}
