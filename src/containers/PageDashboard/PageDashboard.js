import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userFromActions } from "../../userFromRedux";

const PageDashboard = (props) => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState();
  useEffect(() => {
    let isValidUser = JSON.parse(localStorage.getItem("userinfo"));
    setUserData(dispatch(userFromActions.getUserData(isValidUser)));
  }, [userData]);

  console.log(userData);
  return (
    <div className="formWrapper">
      <h2> Dashboard</h2>
      <div>
        <button
          className="button"
          onClick={() => {
            localStorage.removeItem("userinfo");
            props.history.push("/login");
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default PageDashboard;
