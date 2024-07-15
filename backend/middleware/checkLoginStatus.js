const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_KEY;
const checkLoginStatus = (req, res, next) => {
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) {
    return res.status(401).json({ message: "You are not logged in!!" });
  }

  //  sessionToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVjYjVmODEyLWE0ZTktNDNjNC04YTA5LWEwYzBhNTZmMjhiNyIsIm5hbWUiOiJLdWxkZWVwIFlhZGF2IiwidXNlcm5hbWUiOiJrdWxkZWVwX3lhZGF2IiwiaWF0IjoxNzIxMDIzNDEyLCJleHAiOjE3MjEwMjcwMTJ9.my6Fm_gDpV39EZOA2ZqFlUQ1s1Z9Fwjot5phIClZiIE; Path=/;

  let token = "";
  const [cookieName, cookieValue] = cookieHeader.trim().split("=");
  if (cookieName === "sessionToken") {
    token = cookieValue;
  }

  if (!token) {
    return res.status(401).json({ message: "No token found in cookies!!" });
  }

  jwt.verify(token, secretKey, (error, decode) => {
    if (error) {
      if (error.expiredAt) {
        return res.status(403).json({ message: "Token Expired!" });
      }
      return res.status(403).json({ message: "Token is Not Valid!" });
    }
    req.user = decode; //decoded data from token
    next();
    // return res.status(200).json({ message: "Token is Valid!" });
    
  });
};

module.exports = checkLoginStatus;











// A    B(middleware) ---> next    C








