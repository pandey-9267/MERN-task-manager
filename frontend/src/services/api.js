import axios from "axios";

const API = axios.create({
  baseURL: "https://f-s-d.onrender.com/api/tasks"
});

export default API;