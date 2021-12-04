import React, { useEffect, useState } from "react";
import "./DateRoller.css";
import Roller from "./Roller";
import DateOptionGenerator, { SelectParams } from "./DateOptionGenerator";
import useScript from "../../common/useScript";

export type Params = {
  rangeStart: Date;
  rangeEnd: Date;
  value?: Date;
  onChange?: (value: Date) => void;
};

export default function DateRoller({ rangeStart, rangeEnd, value, onChange }: Params) {
  const [generator] = useState(new DateOptionGenerator(rangeStart, rangeEnd, value ?? new Date()));

  const { year, month, date } = generator.selectedValues;

  const [yearOptions, setYearOptions] = useState(generator.yearOptions);
  const [monthOptions, setMonthOptions] = useState(generator.monthOptions);
  const [dateOptions, setDateOptions] = useState(generator.dateOptions);

  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedDate, setSelectedDate] = useState(date);

  const selectValue = (params: Partial<SelectParams>) => {
    const { year, month, date } = generator.select(params);

    setYearOptions(generator.yearOptions);
    setMonthOptions(generator.monthOptions);
    setDateOptions(generator.dateOptions);

    setSelectedYear(year);
    setSelectedMonth(month);
    setSelectedDate(date);

    onChange?.call(null, new Date(year, month - 1, date));
  };

  return (
    <div className="date-roller-panel-combobox">
      <Roller options={yearOptions} value={selectedYear} onChange={(year) => selectValue({ year })} />
      <Roller options={monthOptions} value={selectedMonth} onChange={(month) => selectValue({ month })} />
      <Roller options={dateOptions} value={selectedDate} onChange={(date) => selectValue({ date })} />
    </div>
  );
}
