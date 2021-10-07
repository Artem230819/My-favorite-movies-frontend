import React, { FC } from "react";

interface Props {
  onChange: React.ChangeEventHandler;
  value: string;
}

export const YearValue: FC<Props> = ({ ...props }) => {
  const items = [];
  for (let i = new Date().getFullYear(); i > 1960; i--) {
    items.push(i);
  }
  return (
    <select {...props}>
      {items.map((items, kay) => (
        <option key={kay} value={items}>
          {items}
        </option>
      ))}
    </select>
  );
};
