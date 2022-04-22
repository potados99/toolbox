import "./Roller.css";
import React, { useEffect, useRef } from "react";

export type Params = {
  options: number[];
  value: number;
  onChange: (value: number) => void;
};

export default function Roller(params: Params) {
  const { options, value, onChange } = params;

  const selected = useRef(null);

  const renderItem = (valueHere: number) => {
    return (
      <li
        key={valueHere}
        className={valueHere === value ? "date-roller-panel-select-option-selected" : ""}
        onClick={() => {
          onChange(valueHere);
        }}
        ref={valueHere === value ? selected : null}
      >
        {valueHere}
      </li>
    );
  };

  useEffect(() => {
    if (selected.current == null) {
      return;
    }

    // @ts-ignore
    selected.current.scrollIntoView({
      block: "center",
    });
  }, []);

  return (
    <div className="date-roller-panel-select">
      <ul>{options.map(renderItem)}</ul>
    </div>
  );
}
