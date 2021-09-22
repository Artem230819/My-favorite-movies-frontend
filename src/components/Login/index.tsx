import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LoginForm } from "./components/LoginForm";
import { useTranslation } from "react-i18next";
import { SelectLocales, WrapperAuth } from "./css";
import React from "react";

export const Login = () => {
  const { t, i18n } = useTranslation();
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <WrapperAuth>
      <div>
        <SelectLocales name="language" onChange={onChange}>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </SelectLocales>
        <div>
          <div>
            <div>
              <AccountCircleIcon
                color="primary"
                sx={{ fontSize: 50 }}
              ></AccountCircleIcon>
            </div>
            <h2>{t("login.title")}</h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </WrapperAuth>
  );
};
