import DateRoller from "../../components/DateRoller";
import React, { ChangeEvent, useState } from "react";
import { differenceInDays, startOfDay, startOfToday } from "date-fns";

export default function Past() {
  const savedDateString = localStorage.getItem("one-day");
  const restoredDate = savedDateString ? new Date(savedDateString) : new Date();

  const [startDate, setStartDate] = useState(restoredDate);
  const [includeStartDate, setIncludeStartDate] = useState(true);

  const onChangeStartDate = (date: Date) => {
    setStartDate(date);
    localStorage.setItem("one-day", date.toISOString());
  };

  const onChangeIncludeStartDate = (event: ChangeEvent<HTMLInputElement>) => {
    setIncludeStartDate(event.target.checked);
  };

  const then = startOfDay(startDate);
  const today = startOfToday();
  const compensation = includeStartDate ? 1 : 0;
  const howManyDaysPast = differenceInDays(today, then) + compensation;

  return (
    <div>
      <section className="card">
        <div className="card-text horizontal-space vertical-space">시작일이 언제인가요?</div>

        <DateRoller
          rangeStart={new Date("1970-01-01")}
          rangeEnd={startOfToday()}
          value={startDate}
          onChange={onChangeStartDate}
        />

        <p className="horizontal-space">
          <input id="includeStartDate" type="checkbox" checked={includeStartDate} onChange={onChangeIncludeStartDate} />
          <label htmlFor="includeStartDate" className="silent-text">
            시작일부터 1일로 계산하기
          </label>
        </p>
      </section>

      <section className="card">
        <div className="card-text horizontal-space vertical-space">오늘은</div>
        <h1 className="horizontal-space vertical-space">{howManyDaysPast}일째 날입니다.</h1>
      </section>
    </div>
  );
}
