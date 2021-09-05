import { FETCH_ALL } from "../constants";
import * as api from "../api";

export const fetchPosts = (router) => async (dispach) => {
  try {
    const {data} = await api.fetchPosts();
    // console.log(data);
    
    dispach({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};