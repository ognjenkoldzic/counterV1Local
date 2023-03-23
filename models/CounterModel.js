import mongoose from "mongoose";

const CounterSchema = new mongoose.Schema(
  {
    counterId: {
      type: Number,
    },
    value: {
      type: Number,
      //min: [0, "negative value not allowed"],
      //max: 99,
      required: true, //is that the right solution???
    },
  },
  { collection: "counter" }
);

const CounterModel = new mongoose.model(
  "CounterModel",
  CounterSchema,
  "counter"
);

export default CounterModel;
