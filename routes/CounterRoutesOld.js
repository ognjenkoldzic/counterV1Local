import express from "express";
import CounterModel from "../models/CounterModel.js";
import { FindCounterById, ChangeValueBy1 } from "../service/CounterDB.js";
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

// router.route("/:counterId/value").get((req, res) => {
//   try {

//     res.status(200).json(req.counter);
//   } catch (err) {
//     console.log(err);
//     console.log(err.message);
//     res.status(500).json(err);
//   }
// });
router
  .route("/:counterId/value/increment")
  .post(handleError(GetChangedCounterPlus));

// router.route("/:counterId/value/increment").post(async (req, res) => {
//   try {
//     await ChangeValueBy1(req.counter, 1, res);
//   } catch (err) {
//     console.log(err);
//     console.log(err.message);
//     res.status(500).json(err);
//   }
// });

router
  .route("/:counterId/value/decrement")
  .post(handleError(GetChangedCounterMinus));

// router.route("/:counterId/value/decrement").post(async (req, res) => {
//   try {
//     await ChangeValueBy1(req.counter, -1, res);
//   } catch (err) {
//     console.log(err);
//     console.log(err.message);
//     res.status(500).json(err);
//   }
// });

export default router;
