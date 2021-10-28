import { FETCH_ALL } from "../constants";

const postReducer = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      console.log(action?.payload);
      return {
        ...state,
        posts: action?.payload.posts,
      };

    default:
      return state;
  }
};

export default postReducer;
