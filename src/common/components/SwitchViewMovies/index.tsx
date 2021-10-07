import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { SwitchBtnWrapper, SwitchColumn, SwitchRow } from "./css";

interface Props {
  switchViewMovies: boolean;
  viewDrawHandleMovie: (btn: boolean) => void;
}

export const SwitchViewMovies: FC<Props> = ({
  switchViewMovies,
  viewDrawHandleMovie,
}) => {
  const { t } = useTranslation();

  return (
    <SwitchBtnWrapper>
      <SwitchRow
        theme={{ switchViewMovies }}
        onClick={() => viewDrawHandleMovie(true)}
      >
        {t("page.homePage.list")}
      </SwitchRow>
      <SwitchColumn
        theme={{ switchViewMovies }}
        onClick={() => viewDrawHandleMovie(false)}
      >
        {t("page.homePage.block")}
      </SwitchColumn>
    </SwitchBtnWrapper>
  );
};
