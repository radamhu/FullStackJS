const axios = require('axios');
// destruktúrálással csak a currencyAPIKey-t objektum elemet húzom be magából a config fájlból
const { currencyAPIKey } = require('./config');
const logger = require('./logger');

// async függvény : visszatré az axios által nyújtott promise-al
async function getCurrency() {
   // mivel itt promise-ról van szó, ezért then-el kell várni az eredméynté
   // response object-et kapunk
   //.then((response) => {
   // itt logoljuk a promise data-t
   // console.log(response.data);
   //});
   // itt vissza is tér a promise data : lehet api-ként használni
    return axios.get(`https://my.api.mockaroo.com/currency?key=${currencyAPIKey}`)
        .then(response => response.data)
        .catch((err) => {
            logger.error(err);
            // console.error(err);
            return { value: -1 };
        });
}

module.exports = getCurrency;