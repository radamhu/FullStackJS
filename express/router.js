const { Router } = require('express');

const router = Router();

router.get('/error', () => {
    throw new Error('jaj ne :(');
  });

// itt létrehozzuk a router-t de még nincs használatban
// /hello útvonlara halgat és visszaválaszol (callback)
router.get('/hello', (req, res) => {
    const { query } = req;
    let response = 'Hello!!!';
    if (query.nev) {
      response += ` ${query.nev.charAt(0).toUpperCase() + query.nev.slice(1)}`;
    }
    res.end(`${response}!`);
  });

  router.post('/hello', (req, res) => {
    console.log('body:', req.body);
    res.end();
  });

// exportálni is kell, hogyelérjük
module.exports = router;