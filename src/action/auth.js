import { AUTH } from "../constants";
import * as api from "../api";

export const signin = (formData, router) => async (dispach) => {
  try {
    const { data } = await api.signIn(formData);
    dispach({
      type: AUTH,
      data,
    });
    router.push("/");
  } catch (error) {
    dispach({
      type: "ERROR",
      data: error.response,
    });
  }
};
export const signup = (formData, router) => async (dispach) => {
  try {
    const { data } = await api.signUp(formData);

    dispach({
      type: AUTH,
      data,
    });
    router.push("/");
  } catch (error) {
    dispach({
      type: "ERROR",
      data: error.response,
    });
  }
};
