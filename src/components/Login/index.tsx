import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LoginForm } from "./components/LoginForm";
import { useTranslation } from "react-i18next";
import { WrapperAuth } from "./css";
import React from "react";
import { LocalizationSelect } from "common/LocalizationSelect";

export const Login = () => {
  const { t } = useTranslation();
  return (
    <WrapperAuth>
      <div>
        <LocalizationSelect />
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
