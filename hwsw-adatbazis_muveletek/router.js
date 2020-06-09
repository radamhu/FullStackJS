const { Router } = require('express');
const getCurrency = require('./currency');

const router = Router();

// itt létrehozzuk a router-t de még nincs használatban
// a / útvonlara halgat és visszaválaszol (callback)
router.get('/', (req, res) => {
  res.end({
    message: 'Ok',
    });
  });

router.get('/currency', async (req, res) => {
  // ahhoz hogy az async-es függvényt használni tudjuk, be kell várni : await
  const result = await getCurrency();

  res.send({
    message: 'ok',
    result,
    value: result.value
  });
})

// exportálni is kell, hogyelérjük
module.exports = router;
