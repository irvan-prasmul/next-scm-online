// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import defaultClient from "@/globals/client";
import axios from "axios";

export function testApi() {
  return axios.get("/");
  // const client = defaultClient(dispatch);
  // return client.get("/");
}

export function formatFormData(payload) {
  let formData = new FormData();
  for (const [key, value] of Object.entries(payload)) {
    formData.append(key, value);
  }
  return formData;
}
