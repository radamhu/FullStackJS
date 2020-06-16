const users = require('../../db/user');


// authentikációs middleware
// express fogja hívni
async function simpleAuth(req, res, next) {
    const { email, password } = req.query;
  
    if (!email || !password) {
      return res.status(401).send({ message: 'Unauthorized, no data' });
    }
  
    const user = await users.findByEmail(email);
  
    if (!user) {
      return res.status(401).send({ message: 'Unauthorized, invalid email' });
    }
  
    if (password !== user.password) {
      return res.status(401).send({ message: 'Unauthorized, invalid password' });
    }
  
    // jön a köv middleware
    return next();
}

module.exports = simpleAuth;