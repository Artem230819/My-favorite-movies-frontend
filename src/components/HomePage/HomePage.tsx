import React from "react";
import { useHistory } from "react-router-dom";

interface Props {}

export const HomePage = (props: Props) => {
    const history = useHistory();
    const logOut = () => {
        localStorage.setItem('Auth', '0');
        history.push("/login")
    }
  return <div>

        <button onClick={logOut}>
            Log out
        </button>

  </div>;
};
