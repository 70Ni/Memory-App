import {
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKEPOST,
  UPDATE,
} from "../constants/actionConstants";



const initialState = [];

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      let file = [...state, action.payload];
      console.log(file);
      return file;
    case UPDATE:
    case LIKEPOST:
      console.log(action.payload);
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return state.filter((post) => post._id !== action.payload);

    default:
      return state;
  }
};
