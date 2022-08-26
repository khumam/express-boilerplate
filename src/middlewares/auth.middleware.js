import { responseUnauthorized } from "../helpers/response.helper.js";

export default function (req, res, next) {
  // do some stuff in this middleware
  if (!req.headers.Authorization) {
    return responseUnauthorized(res);
  }

  next();
}