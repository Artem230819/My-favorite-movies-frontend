import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { SelectLocales } from "./css";

export const LocalizationSelect: FC = () => {
  const { i18n } = useTranslation();
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <SelectLocales name="language" onChange={onChange}>
      <option value="en">English</option>
      <option value="ru">Russian</option>
    </SelectLocales>
  );
};
