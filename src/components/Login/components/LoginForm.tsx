import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import LockIcon from "@mui/icons-material/Lock";
import { ErrorAuth } from "./StyleLoginForm.d";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { IUserCredentials } from "./interfaces/UserCredentials";

export const LoginForm = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const onSubmit = (values: IUserCredentials) => {
    if (values.username !== localStorage.getItem("username")) {
      return { username: t("login.unknownUsername") };
    }
    if (values.password !== localStorage.getItem("password")) {
      return { [FORM_ERROR]: t("login.loginFailed") };
    }
    localStorage.setItem("Auth", "1");
    history.push("/");
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        let errors = {};
        if (!values.username) {
          errors = { ...errors, username: t("login.required") };
        }
        if (!values.password) {
          errors = { ...errors, password: t("login.required") };
        }
        return errors;
      }}
      render={({ submitError, handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <Field name="username">
            {({ input, meta }) => (
              <div className="rounded-md shadow-sm -space-y-px">
                <label className="sr-only">{t("login.username")}</label>
                <input
                  {...input}
                  type="text"
                  placeholder={t("login.username")}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                {(meta.error || meta.submitError) && meta.touched && (
                  <ErrorAuth>{meta.error || meta.submitError}</ErrorAuth>
                )}
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label className="sr-only">{t("login.password")}</label>
                <input
                  {...input}
                  type="password"
                  placeholder={t("login.password")}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                {meta.error && meta.touched && (
                  <ErrorAuth>{meta.error}</ErrorAuth>
                )}
              </div>
            )}
          </Field>
          {submitError && (
            <ErrorAuth className="error">{submitError}</ErrorAuth>
          )}
          <div className="buttons">
            <button
              type="submit"
              disabled={submitting}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockIcon color="primary" sx={{ fontSize: 20 }} />
              </span>
              {t("login.btn")}
            </button>
          </div>
        </form>
      )}
    />
  );
};
