import axios from "axios";

const url = "http://localhost:5000/posts";
const authurl = "http://localhost:5000/users";
const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchPosts = () => API.get("/posts");
export const createPost = (newpost) => axios.post(url, newpost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export const signIn = (formData) => axios.post(`${authurl}/signin`, formData);
export const signUp = (formData) => axios.post(`${authurl}/signup`, formData);

// export const fetchPosts = () => API.get("/posts");
// export const createPost = (newpost) => API.post("/posts", newpost);
// export const updatePost = (id, updatedPost) =>
//   API.patch(`posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`posts/${id}`);
// export const likePost = (id) => API.patch(`posts/${id}/likePost`);

// export const signUp = (formData) => API.post("/users/signup", formData);
// export const signIn = (formData) => API.post("/users/signin", formData);
