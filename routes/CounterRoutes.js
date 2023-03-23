import express from "express";
import testId from "../utils/testId.js";
import handleError from "../utils/handleError.js";
import {
  GetCounter,
  GetChangedCounterPlus,
  GetChangedCounterMinus,
} from "../controllers/Counter.js";

const router = express.Router();

router.param("counterId", (req, res, next) => {
  if (!testId(req.params.counterId)) {
    next(res.status(400).send("Invalid ID supplied"));
    return;
  }
  next();
});

router.route("/:counterId/value").get(handleError(GetCounter));

router
  .route("/:counterId/value/increment")
  .post(handleError(GetChangedCounterPlus));

router
  .route("/:counterId/value/decrement")
  .post(handleError(GetChangedCounterMinus));

export default router;
