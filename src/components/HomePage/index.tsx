import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { LogOut } from "services/LogOutUser";
import { LocalizationSelect } from "common/LocalizationSelect";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import {
  HomeUserBox,
  HomeWrapper,
  SwitchBlock,
  SwitchBtnWrapper,
  SwitchList,
  ToolBox,
} from "./css";
import { Genres } from "./components/Genres";
import { FeaturedMoviesList } from "./components/FeaturedMoviesList";

interface Props {}

export const HomePage: FC<Props> = () => {
  const history = useHistory();
  const user = localStorage.getItem("username");

  const { t } = useTranslation();

  const [switchViewMovies, setSwitchViewMovies] = useState<boolean>(true);

  const viewDrawHandleMovie = (btn: boolean) => {
    setSwitchViewMovies(btn);
  };
  const redirectToSearchMovies = () => {
    history.push("/searchMovies");
  };

  return (
    <HomeWrapper>
      <LocalizationSelect />
      <h1>{t("homePage.title")}</h1>
      <HomeUserBox>
        <span>
          {t("homePage.greetings")}: <b>{user}</b>
        </span>
        <button
          onClick={(): void => {
            LogOut(history);
          }}
        >
          {t("homePage.logOut")}
        </button>
      </HomeUserBox>
      <Genres />
      <ToolBox>
        <button onClick={redirectToSearchMovies}>
          {t("homePage.add")} <ControlPointIcon />
        </button>
        <SwitchBtnWrapper>
          <SwitchList
            theme={{ switchViewMovies }}
            onClick={() => viewDrawHandleMovie(true)}
          >
            {t("homePage.list")}
          </SwitchList>
          <SwitchBlock
            theme={{ switchViewMovies }}
            onClick={() => viewDrawHandleMovie(false)}
          >
            {t("homePage.block")}
          </SwitchBlock>
        </SwitchBtnWrapper>
      </ToolBox>
      <FeaturedMoviesList switchViewMovies={switchViewMovies} />
    </HomeWrapper>
  );
};
