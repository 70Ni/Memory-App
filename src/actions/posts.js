import * as api from "../api";
import { CREATE, DELETE, FETCH_ALL, LIKEPOST, UPDATE } from "../constants/actionConstants";

//action creators

// first stage of action creator

// // const getPosts = () => {
// //   const action = { tyep: "FETCH _ALL", payload: [] };
// //   return action;
// // };

//second stage of action creation
// // const getPosts = () => async (dispatch) => {
// //   const action = { type: "FETCH _ALL", payload: [] };
// //   return action;
// // };

// Third stage of action creation

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};




export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
    console.log(post);
  } catch (error) {
    console.log(error.message);
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    console.log("Here we get");
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error, "error here");
  }
};

export const likePost = (id) => async (dispatch) => {
  console.log(id);
  try {
    const { data } = await api.likePost(id);
    console.log(id,"after dispatch");
    dispatch({ type: LIKEPOST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
