const users = require('../../db/user');

async function cookiesAuth(req, res, next) {
  const auth = req.cookies.session;

  if (!auth) {
    return res.status(401).send({ message: 'Unauthorized, no data' });
  }

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

  return next();
}

module.exports = cookiesAuth;