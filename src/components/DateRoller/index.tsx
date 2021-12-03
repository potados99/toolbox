import React, { useState } from "react";
import "./DateRoller.css";
import Roller from "./Roller";
import DateOptionGenerator, { SelectParams } from "./DateOptionGenerator";

export type Params = {
  rangeStart: Date;
  rangeEnd: Date;
};

export default function DateRoller({ rangeStart, rangeEnd }: Params) {
  const today = new Date();

  const [generator] = useState(new DateOptionGenerator(rangeStart, rangeEnd, today));

  const [yearOptions, setYearOptions] = useState(generator.yearOptions);
  const [monthOptions, setMonthOptions] = useState(generator.monthOptions);
  const [dateOptions, setDateOptions] = useState(generator.dateOptions);

  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState(today.getDate());

  const selectValue = (params: Partial<SelectParams>) => {
    const { year, month, date } = generator.select(params);

    setYearOptions(generator.yearOptions);
    setMonthOptions(generator.monthOptions);
    setDateOptions(generator.dateOptions);

    setSelectedYear(year);
    setSelectedMonth(month);
    setSelectedDate(date);
  };

  return (
    <div className="date-roller-panel-combobox">
      <Roller options={yearOptions} value={selectedYear} onChange={(year) => selectValue({ year })} />
      <Roller options={monthOptions} value={selectedMonth} onChange={(month) => selectValue({ month })} />
      <Roller options={dateOptions} value={selectedDate} onChange={(date) => selectValue({ date })} />
    </div>
  );
}
