import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LoginForm } from "./components/LoginForm";
import { useTranslation } from "react-i18next";
import { SelectLocales, WrapperAuth } from "./StyleLogin.d";
import React from "react";

export const Login = () => {
  const { t, i18n } = useTranslation();
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <WrapperAuth>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <SelectLocales name="language" onChange={onChange}>
          <option value="en">English</option>
          <option value="ru">Russian</option>
        </SelectLocales>
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="text-center">
              <AccountCircleIcon
                color="primary"
                sx={{ fontSize: 50 }}
              ></AccountCircleIcon>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {t("login.title")}
            </h2>
          </div>
          <LoginForm />
        </div>
      </div>
    </WrapperAuth>
  );
};
