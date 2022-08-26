import bodyParser from "body-parser";
import express from "express";
import v1 from "../routes/v1.route.js";

export default function (app) {
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/v1', v1);
}