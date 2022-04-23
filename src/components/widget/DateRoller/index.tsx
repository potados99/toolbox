import styled from "styled-components";
import Roller from "./Roller";
import React, { useState } from "react";
import DateOptionGenerator, { SelectParams } from "./DateOptionGenerator";

export type Props = {
  rangeStart: Date;
  rangeEnd: Date;
  value?: Date;
  onChange?: (value: Date) => void;
};

export default function DateRoller({ rangeStart, rangeEnd, value, onChange }: Props) {
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
    <ComboBox>
      <Roller options={yearOptions} value={selectedYear} onChange={(year) => selectValue({ year })} />
      <Roller options={monthOptions} value={selectedMonth} onChange={(month) => selectValue({ month })} />
      <Roller options={dateOptions} value={selectedDate} onChange={(date) => selectValue({ date })} />
    </ComboBox>
  );
}

const ComboBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  max-width: 450px;

  mask-image: linear-gradient(
    to bottom,
    rgba(64, 64, 64, 0) 0%,
    rgba(64, 64, 64, 1) 10%,
    rgba(64, 64, 64, 1) 90%,
    rgba(64, 64, 64, 0) 100%
  );
`;
