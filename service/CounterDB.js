import CounterModel from "../models/CounterModel.js";

const FindCounterById = (id) => {
  const counter = CounterModel.findOne({
    counterId: id,
  });

  return counter;
};

const ChangeValueBy1 = (counter, change) => {
  counter.value = counter.value + change;
  counter.save();
  return counter;
};

export { FindCounterById, ChangeValueBy1 };
