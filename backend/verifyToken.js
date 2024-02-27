const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json("You are not Authenticated!");
  }
  jwt.verify(token, process.env.SECRET, async (err, data) => {
    if (!token) {
      res.status(403).json("Token is not Valid!");
    }
    req.userId = data;
    // console.log("PAssed");
    next();
  });
};
module.exports = verifyToken;
