import axios from "axios";

export const  axiosPlaceHolder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000
  });