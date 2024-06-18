import { React, useState } from "react";
import Input from "./Input";
import "./styles.css";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Auth() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const history = useNavigate();
  const [IsSignUp, setSignUp] = useState(false);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const setIsSignUp = () => {
    setSignUp(!IsSignUp);
  };

  const googleError = () => {
    alert("Google sign Up was unsuccessful, Try again later");
  };
  const googleSuccess = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="sign-container">
        <h1> {IsSignUp ? "Sign Up" : "Sign In"}</h1>
        {IsSignUp && (
          <div className="name-container">
            <Input
              name="firstName"
              placeholder="FirstName"
              handleChange={handleChange}
              value={data.firstName}
              //   onChange={(e) => setData({ ...data, username: e.target.value })}
              type="text"
              data={data}
            />
            <Input
              name="LastName"
              placeholder="LastName"
              handleChange={handleChange}
              value={data.lastName}
              //   onChange={(e) => setData({ ...data, username: e.target.value })}
              type="text"
              data={data}
            />
          </div>
        )}
        <Input
          name="email"
          placeholder="email"
          handleChange={handleChange}
          value={data.email}
          //   onChange={(e) => setData({ ...data, username: e.target.value })}
          type="text"
          data={data}
        />
        <Input
          name="password"
          placeholder="Password"
          handleChange={handleChange}
          value={data.password}
          type="password"
          //   onChange={(e) => setData({ ...data, username: e.target.value })}
          data={data}
        />
        {IsSignUp && (
          <Input
            name="confirmPassword"
            placeholder="confirmPassword"
            handleChange={handleChange}
            value={data.confirmPassword}
            type="confirmPassword"
            //   onChange={(e) => setData({ ...data, username: e.target.value })}
            data={data}
          />
        )}
      </div>
      <GoogleLogin
        clientId="Client ID"
        render={(renderProps) => (
          <button onClick={renderProps.onClicks}>Google sign Up</button>
        )}
        onFailure={googleSuccess}
        onSuccess={googleError}
      />
      <h5>
        {IsSignUp ? "Already Have an Account ? " : "Don't have an account ? "}

        <span
          className="set-signup"
          onClick={() => {
            setIsSignUp(!setSignUp);
          }}
        >
          {IsSignUp ? "Sign In" : "Sign Up"}
        </span>
      </h5>
    </div>
  );
}

export default Auth;
