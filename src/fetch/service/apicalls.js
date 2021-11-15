// import axios from "axios";
// export default axios.create({ baseURL: "http://localhost:8283/api/books" });
import http from "../http-common";

const getAll = (url) => {
  return http.get(`${url}`);
};

const get = (url, id) => {
  return http.get(`${url}/${id}`);
};

const create = (url, data) => {
  return http.post(`${url}`, data);
};

const update = (url, id, data) => {
  return http.put(`${url}/${id}`, data);
};

const remove = (url, id) => {
  return http.delete(`${url}/${id}`);
};

// const removeAll = (url) => {
//   return http.delete(`${url}`);
// };

// const findByTitle = (url, title)=> {
//   return http.get(`${url}?title=${title}`);
// };

export default { getAll, get, create ,update,remove};