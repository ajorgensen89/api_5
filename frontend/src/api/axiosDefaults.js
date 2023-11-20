import axios from 'axios';


/** Import into App.js */

// axios.defaults.baseURL = "https://aj-project-5-c79c48d5b453.herokuapp.com/"

/** multipart for images and text requests */
axios.defaults.headers.post['Content-Type'] = "multipart/form-data"

/** To avoid CORS errors when sedning cookies. */
axios.defaults.withCredentials = true

export const axiosRec = axios.create()
export const axiosRes = axios.create()
