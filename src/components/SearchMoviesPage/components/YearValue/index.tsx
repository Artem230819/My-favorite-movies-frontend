import React, { FC } from "react";

interface Props {
  onChange: React.ChangeEventHandler;
  value: string;
}

export const YearValue: FC<Props> = ({ ...props }) => {
  const year = [];
  for (let i = new Date().getFullYear(); i > 1960; i--) {
    year.push(i);
  }
  return (
    <select {...props}>
      {year.map((year, kay) => (
        <option key={kay} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};
