import { React, useState } from "react";
import Input from "./Input";
import "./styles.css";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {signup,signin} from '../../actions/auth'

function Auth() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [IsSignUp, setSignUp] = useState(false);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (IsSignUp) {
      dispatch(signup(data, history));
    } else {
      dispatch(signin(data, history));
    }
  };

  const setIsSignUp = () => {
    setSignUp(!IsSignUp);
  };

  const googleError = (error) => {
    console.log(error);
    alert("Google sign Up was unsuccessful, Try again later");
  };
  const googleSuccess = async (res) => {
    console.log(res);
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
    <form onSubmit={handleSubmit}>
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
            type="password"
            //   onChange={(e) => setData({ ...data, username: e.target.value })}
            data={data}
          />
        )}
      </div>
      {/* <GoogleLogin
        clientId="564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button
            // className={classes.googleButton}
            color="primary"
            fullWidth
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            // startIcon={<Icon />}
            variant="contained"
          >
            Google Sign In
          </Button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleError}
        cookiePolicy="single_host_origin"
      /> */}
      <GoogleLogin
        clientId="959318203937-7os6bd4t9hs0418nnb55on5macue7901.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            style={{ width: 300, margin: 14 }}
            onClick={renderProps.onClick}
          >
            Google sign Up
          </button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleError}
        cookiePolicy="single_host_origin"
      />
      <div className="auth-button-wrapper">
        <button type="submit" style={{ width: 300, margin: 14 }}>
          {IsSignUp ? "Sign Up" : "Sign In"}
        </button>
        <h5 style={{ width: 300, margin: 14 }}>
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
    </form>
  );
}

export default Auth;
