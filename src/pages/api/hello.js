// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

export function testError(req, res) {
  res.status(400).json({ message: "testing" });
}
