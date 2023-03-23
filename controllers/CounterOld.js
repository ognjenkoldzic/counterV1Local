import { FindCounterById, ChangeValueBy1 } from "../service/CounterDB.js";

const getCounterAndRespond = async (req, res, changeValue = 0) => {
  const counter = await FindCounterById(req.params.counterId);
  const response = !counter
    ? res.status(404).send("Counter not found")
    : changeValue !== 0
    ? (await ChangeValueBy1(counter, changeValue),
      res.status(200).json(counter))
    : res.status(200).json(counter);
  return response;

  //   const counter = await FindCounterById(req.params.counterId);
  //   if (!counter) {
  //     return res.status(404).send("Counter not found");
  //   } else {
  //     if (changeValue !== 0) {
  //       ChangeValueBy1(counter, changeValue);
  //     }
  //     return res.status(200).json(counter);
  //   }
};

const GetCounter = async (req, res) => {
  return await getCounterAndRespond(req, res);
};

const GetChangedCounterPlus = async (req, res) => {
  return await getCounterAndRespond(req, res, 1);
};

const GetChangedCounterMinus = async (req, res) => {
  return await getCounterAndRespond(req, res, -1);
};

// const GetCounter = async (req, res) => {
//   const counter = await FindCounterById(req.params.counterId);

//   if (!counter) {
//     return res.status(404).send("Counter not found");
//   } else {
//     return res.status(200).json(counter);
//   }
// };

// const GetChangedCounterPlus = async (req, res) => {
//   const counter = await FindCounterById(req.params.counterId);
//   if (!counter) {
//     return res.status(404).send("Counter not found");
//   } else {
//     ChangeValueBy1(counter, 1);

//     return res.status(200).json(counter);
//   }
// };

// const GetChangedCounterMinus = async (req, res) => {
//   const counter = await FindCounterById(req.params.counterId);
//   if (!counter) {
//     return res.status(404).send("Counter not found");
//   } else {
//     ChangeValueBy1(counter, -1);

//     return res.status(200).json(counter);
//   }
// };

export { GetCounter, GetChangedCounterPlus, GetChangedCounterMinus };
