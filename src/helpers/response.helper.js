const responseSuccess = (res, data = []) => {
  return res.status(200).json({ message: "success", data });
}

const responseBadRequest = (res, data = []) => {
  return res.status(400).json({ message: "bad request", data });
};

const responseUnauthorized = (res, data = []) => {
  return res.status(401).json({ message: "unauthorized", data });
};

const responseError = (res, data = []) => {
  return res.status(500).json({ message: "error", data });
};

export {
  responseSuccess,
  responseBadRequest,
  responseUnauthorized,
  responseError,
}