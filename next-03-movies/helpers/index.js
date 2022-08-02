import {parse} from "cookie";

export const parseCookies = (req) => {
  return parse(req ? req.headers.cookie || "" : "");
};
