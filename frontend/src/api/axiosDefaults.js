import axios from 'axios';


/** Import into App.js. */

// axios.defaults.baseURL = "https://aj-project-5-c79c48d5b453.herokuapp.com/"
// For Deployment.
axios.defaults.baseURL = "/api";

/** multipart for images and text requests. */
axios.defaults.headers.post['Content-Type'] = "multipart/form-data"

/** To avoid CORS errors when sending cookies. */
axios.defaults.withCredentials = true

/** Create for access tokens. */
/** axiosReq to intercept request. */
export const axiosReq = axios.create();

export const axiosRec = axios.create();

/** axiosRes to intercept responsse. */
export const axiosRes = axios.create();
