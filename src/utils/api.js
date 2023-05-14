import axios from "axios";

const Axios = axios.create({
  baseURL: "https://kitsu.io/api/edge",
  mode: 'cors',
  headers: {
    "Accept": "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  },
});

const config = {
  mode: 'cors',
  headers: {
    "Accept": "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  }
}

export { Axios, config}