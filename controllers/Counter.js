import { FindCounterById, ChangeValueBy1 } from "../service/CounterDB.js";

const getCounterAndRespond = async (req, res, changeValue = 0) => {
  const counter = await FindCounterById(req.params.counterId);
  if (!counter) {
    return res.status(404).send("Counter not found");
  }
  if (changeValue !== 0) {
    if (changeValue === -1 && counter.value === 0) {
      return res.status(406).send("Negative value not allowed");
    } else {
      await ChangeValueBy1(counter, changeValue);
      return res.status(200).json(counter);
    }
  }
  return res.status(200).json(counter);
};

const GetCounter = async (req, res) => {
  return await getCounterAndRespond(req, res);
};

const GetChangedCounterPlus = async (req, res) => {
  return await getCounterAndRespond(req, res, 1);
};

const GetChangedCounterMinus = async (req, res) => {
  await getCounterAndRespond(req, res, -1);
};

export { GetCounter, GetChangedCounterPlus, GetChangedCounterMinus };
