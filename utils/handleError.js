const handleError = (func) => (req, res, next) => {
  try {
    func(req, res, next);
  } catch (err) {
    console.log(err);
    console.log(err.message);
    res.status(500).json(err);
  }
};

export default handleError;
