import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userFromActions } from "../../userFromRedux";
import { useSelector } from "react-redux";
import Input from "../../components/Input/Input";

const PageUserLogin = (props) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();

  const clickHandler = async () => {
    dispatch(userFromActions.postNewArrivalUser(userData, () => props.history.push("/dashboard")));
  };
  const error = useSelector((s) => s.productMST?.userLoggedIn.error);
  console.log(error);

  return (
    <div className="formWrapper">
      <h2> Login</h2>
      <div>
        <Input
          labelName={"Username"}
          type="text"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>
      <div>
        <Input
          labelName={"Password"}
          type="password"
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
      </div>
      <div>
        <button className="button" onClick={clickHandler}>
          {"Login"}
        </button>
      </div>
      <div>
        <div className="error">{error?.message ? error.message : ""}</div>
        <div className="link" onClick={() => props.history.push("/signup")}>
          {" "}
          Register New User{" "}
        </div>
      </div>
    </div>
  );
};

export default PageUserLogin;
