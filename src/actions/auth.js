import * as api from "../api/index";
import { AUTH } from "../constants/actionConstants";

// import { useNavigate } from "react-router-dom";
// const navigate =  ();

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  console.log(formData);
  try {
    const { data } = await api.signUp(formData);
    console.log(data);
    dispatch({ type: AUTH, payload: data });
    history("/");
  } catch (error) {
    console.log(error);
  }
};
