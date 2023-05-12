import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://kitsu.io/api/edge",
  headers: {
    "Accept": "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  },
});