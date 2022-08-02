import cookie from "cookie";
import { URL_API } from "@/config/index";

export default async (req, res) => {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      res.status(401).json({ message: "No authorized" });
      return;
    }
    const { token } = cookie.parse(req.headers.cookie);

    const strapiRes = await fetch(`${URL_API}/api/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const user = await strapiRes.json();

    if (strapiRes.ok) {
      res.status(200).json({ user});
    } else {
      res.status(data.error.status).json({ message: data.error });
      //res.status(403).json({ message: "Forbidden Access" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method  ${req.method} not allowed` });
  }
};
