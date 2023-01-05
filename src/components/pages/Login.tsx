import { useState } from "react";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [Login, setLogin] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const loginInfo = [
    {
      username: "admin",
      password: "admin1",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    var { uname, pass } = document.forms[0];

    // hitta login info
    const userLogin = loginInfo.find(
      (user: any) => user.username === uname.value
    );

    // Compare user info
    if (userLogin) {
      if (userLogin.password !== pass.value) {
        // fel password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setLogin(true);
      }
    } else {
      // Username inte hittat
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const loginForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Användarnamn </label>
          <input className="input-box" type="text" name="uname" required />
          {/*{renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Lösenord </label>
          <input className="input-box" type="password" name="pass" required />
          {/* {renderErrorMessage("pass")}*/}
        </div>
        <div className="button-container">
          <button className="btn-submit" type="submit">
            Logga in
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="admin-container">
      <h2>Logga in</h2>
      {Login ? <Navigate to="/Reservation" /> : loginForm}
    </div>
  );
};
