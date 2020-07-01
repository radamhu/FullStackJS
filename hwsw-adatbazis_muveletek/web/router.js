const { Router } = require('express');
const getCurrency = require('../currency');
const {
  get, list, insert, update, remove,
} = require('./expenseHandler');
const { register, login } = require('./userHandler');
const auth = require('./auth/jwt');

const publicRouter = Router();
const privateRouter = Router();

// használ egy authetnikációt
privateRouter.use(auth);

// itt létrehozzuk a router-t de még nincs használatban
// a / útvonlara halgat és visszaválaszol (callback)
publicRouter.get('/healthz', (req, res) => {
  setTimeout(() => {
    res.send({
      message: 'OK',
    });
  }, 2000)
});

publicRouter.get('/currency', async (req, res) => {
  // ahhoz hogy az async-es függvényt használni tudjuk, be kell várni : await
  const result = await getCurrency();
  res.send({
    message: 'ok',
    result,
    value: result.value
  });
})

// expense related endpoints
// REST API esetén maga az útvonal mondja meg milyen erőforrásokat igényelek
privateRouter.get('/expenses', list);
// query paraméter, mondog db estén objectID alapján
privateRouter.get('/expenses/:id', get);
privateRouter.post('/expenses', insert);
privateRouter.put('/expenses/:id', update);
privateRouter.delete('/expenses/:id', remove);

// user rleated endpoint
publicRouter.post('/register', register);
publicRouter.post('/login', login);

// exportálni is kell, hogyelérjük
module.exports = {
  publicRouter,
  privateRouter,
};
