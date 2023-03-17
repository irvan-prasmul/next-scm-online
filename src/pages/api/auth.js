import axios from "axios";

export function login(payload) {
  //   const form = formatFormData(payload);
  return axios.post("user/login", payload);
}
