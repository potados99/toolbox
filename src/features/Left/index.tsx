import React from "react";
import DateRoller from "../../components/DateRoller";
import { startOfToday } from "date-fns";

export default function Left() {
  return (
    <div>
      히히
      <DateRoller rangeStart={new Date("1970-05-02")} rangeEnd={startOfToday()} />
    </div>
  );
}
