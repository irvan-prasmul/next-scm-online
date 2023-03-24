import defaultClient from "@/globals/client";
import { setAuth } from "@/globals/slices";
import axios from "axios";
// import { formatFormData } from "./global";

export function refreshToken(refreshToken) {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BE_URL,
    headers: { Accept: "application/json" },
  });

  return client.post("/oauth/token", {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    scope: "",
  });
}

export function login(payload) {
  // const form = formatFormData(payload);
  const client = defaultClient();
  return client.post("/oauth/token", {
    grant_type: "password",
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    username: payload.email,
    password: payload.password,
    scope: "*",
  });
}

export function getUserDetails() {
  const client = defaultClient();
  return client.get("api/user/details");
}
