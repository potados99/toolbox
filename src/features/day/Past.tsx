import styled from "styled-components";
import Card from "../../components/card/Card";
import CardTitle from "../../components/card/CardTitle";
import DateRoller from "../../components/widget/DateRoller";
import CardBigText from "../../components/card/CardBigText";
import React, { ChangeEvent, useState } from "react";
import { differenceInDays, startOfDay, startOfToday } from "date-fns";
import { horizontalMargin, secondaryTextSize, tertiaryTextColor } from "../../common/styles";

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
    <>
      <Card>
        <CardTitle>시작일이 언제인가요?</CardTitle>

        <Roller
          rangeStart={new Date("1970-01-01")}
          rangeEnd={startOfToday()}
          value={startDate}
          onChange={onChangeStartDate}
        />

        <CheckBoxSection>
          <input id="includeStartDate" type="checkbox" checked={includeStartDate} onChange={onChangeIncludeStartDate} />
          <Label htmlFor="includeStartDate">시작일부터 1일로 계산하기</Label>
        </CheckBoxSection>
      </Card>

      <Card>
        <CardTitle>오늘은</CardTitle>
        <CardBigText>{howManyDaysPast}일째 날입니다.</CardBigText>
      </Card>
    </>
  );
}

const Roller = styled(DateRoller)`
  * {
    ${tertiaryTextColor}
  }
`;

const CheckBoxSection = styled.p`
  ${horizontalMargin}
`;

const Label = styled.label`
  ${secondaryTextSize}
  ${tertiaryTextColor}
`;
