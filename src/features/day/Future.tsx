import DateRoller from "../../components/widget/DateRoller";
import React, { useState } from "react";
import { differenceInDays, startOfDay, startOfToday } from "date-fns";

export default function Future() {
  const savedDateString = localStorage.getItem("some-day");
  const restoredDate = savedDateString ? new Date(savedDateString) : new Date();

  const [endDate, setEndDate] = useState(restoredDate);

  const onChangeEndDate = (date: Date) => {
    setEndDate(date);
    localStorage.setItem("some-day", date.toISOString());
  };

  const then = startOfDay(endDate);
  const today = startOfToday();
  const howManyDaysLeft = differenceInDays(then, today);

  return (
    <div>
      <section className="card">
        <div className="card-text horizontal-space vertical-space">종료일이 언제인가요?</div>

        <DateRoller
          rangeStart={startOfToday()}
          rangeEnd={new Date("2099-09-09")}
          value={endDate}
          onChange={onChangeEndDate}
        />
      </section>

      <section className="card">
        <div className="card-text horizontal-space vertical-space">그날까지</div>
        <h1 className="horizontal-space vertical-space">{howManyDaysLeft}일 남았습니다.</h1>
      </section>
    </div>
  );
}
