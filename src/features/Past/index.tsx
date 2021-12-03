import React, { ChangeEvent, useState } from "react";
import {
  differenceInDays,
  isAfter,
  startOfDay,
  startOfToday,
  startOfTomorrow,
  format,
} from "date-fns";

export default function Past() {
  const [startDate, setStartDate] = useState(new Date());
  const [includeStartDate, setIncludeStartDate] = useState(true);

  const onChangeStartDate = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value);

    if (isAfter(selectedDate, startOfTomorrow())) {
      alert("너무 미래입니다!");

      return;
    }

    setStartDate(selectedDate);
  };

  const onChangeIncludeStartDate = (event: ChangeEvent<HTMLInputElement>) =>
    setIncludeStartDate(event.target.checked);

  const then = startOfDay(startDate);
  const today = startOfToday();
  const compensation = includeStartDate ? 1 : 0;
  const howManyDaysPast = differenceInDays(today, then) + compensation;

  return (
    <div>
      <p>
        <label>시작일이 언제인가요?</label>
        <input type="date" onChange={onChangeStartDate} />
      </p>

      <p>
        <input
          id="includeStartDate"
          type="checkbox"
          checked={includeStartDate}
          onChange={onChangeIncludeStartDate}
        />
        <label htmlFor="includeStartDate">시작일부터 1일로 계산하기</label>
      </p>

      <div>
        <span>{format(startDate, "yyyy년 M월 d일")}부터 지금까지</span>
        <h3>D-{howManyDaysPast}</h3>
      </div>
    </div>
  );
}
