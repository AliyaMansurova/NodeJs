const queryParser = (req, res, next) => {
  res.parsedQuery = req.query;
  next();
};

module.exports = queryParser;