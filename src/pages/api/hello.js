// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import defaultClient from "@/globals/client";

export function testApi(dispatch, payload) {
  const client = defaultClient(dispatch);
  return client.get("/");
}
