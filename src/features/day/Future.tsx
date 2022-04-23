import DateRoller from "../../components/widget/DateRoller";
import React, { useState } from "react";
import { differenceInDays, startOfDay, startOfToday } from "date-fns";
import Card from "../../components/card/Card";
import CardTitle from "../../components/card/CardTitle";
import CardBigText from "../../components/card/CardBigText";

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
    <>
      <Card>
        <CardTitle>종료일이 언제인가요?</CardTitle>

        <DateRoller
          rangeStart={startOfToday()}
          rangeEnd={new Date("2099-09-09")}
          value={endDate}
          onChange={onChangeEndDate}
        />
      </Card>

      <Card>
        <CardTitle>그날까지</CardTitle>
        <CardBigText>{howManyDaysLeft}일 남았습니다.</CardBigText>
      </Card>
    </>
  );
}
