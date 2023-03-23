import defaultClient from "@/globals/client";
import { setAuth } from "@/globals/slices";
import axios from "axios";
// import { formatFormData } from "./global";

export function login(payload) {
  // const form = formatFormData(payload);
  const client = defaultClient();
  return client.post("/oauth/token", {
    grant_type: "password",
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    username: payload.email, // "irvan.erdika@prasetiyamulya.ac.id",
    password: payload.password, // "1234",
    scope: "*",
  });
}

export function getUserDetails() {
  const client = defaultClient();
  return client.get("api/user/details");
}
