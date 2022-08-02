import cookie from "cookie-parser";

export const parsingCookies = (req) => {
  return cookie.parseCookies(req ? req.headers.cookie || "" : "");
};
