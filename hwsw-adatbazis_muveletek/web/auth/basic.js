const users = require('../../db/user');


// authentikációs middleware
// express fogja hívni
async function basicAuth(req, res, next) {
    const auth = req.headers.authorization;
    
    if (!auth) {
      return res.status(401).send({ message: 'Unauthorized, no data' });
    }
    
    // asdadasd = -> username:password
    // tömb destruktúrálás
    const [email, password] = Buffer.from(auth, 'base64')
        .toString('utf-8')
        .split(':');
    
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

module.exports = basicAuth;