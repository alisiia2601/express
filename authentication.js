const validApiKeys = ["3", "5", "11"];

const authentication = (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (validApiKeys.includes(apiKey)) {
    next();
  } else {
    res.status(401).json({ message: 'Invalid API key' });
  }
};

module.exports = authentication;
