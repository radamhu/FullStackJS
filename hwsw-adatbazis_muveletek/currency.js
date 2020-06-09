const axios = require('axios');

// async függvény : visszatré az axios által nyújtott promise-al
async function getCurrency() {
    // mivel itt promise-ról van szó, ezért then-el kell várni az eredméynté
    // response object-et kapunk
    return axios.get('https://my.api.mockaroo.com/currency?key=9ad4e5b0')
        //.then((response) => {
        // itt logoljuk a promise data-t
        // console.log(response.data);
        //});
        // itt vissza is tér a promise data : lehet api-ként használni
        .then(response => response.data)
        .catch((err) => {
            console.error(err);
            return { value: -1 };
        });
}

module.exports = getCurrency;