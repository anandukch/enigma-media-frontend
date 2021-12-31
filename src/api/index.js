import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2000/api",
});
api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("token"));
  config.headers.Authorization = `Bearer ${token?.token}`;
  return config;
});

export const fetchPosts = () => api.get("/posts");
export const fetchPostById = (id) => api.get(`/posts/${id}`);
export const createPost = (post) => api.post("/posts", post);
export const likePost = (id) => api.put(`/posts/like/${id}`);
export const signIn = (user) => api.post("/user/signin", user);
export const signUp = (user) => api.post("/user/signup", user);
