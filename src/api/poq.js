import axios from "axios";

export const products = axios.create({
  baseURL: "https://run.mocky.io/v3",
});
