// ide kerül minden olyan DB művelet ami a kiadásokkal kapcsolatos
const { getDB } = require('./index');

// rakd ki a collection nevét változóba,  nagyon nehéz elírni, így meg váltoval foglalkozhatsz
const collectionName = 'users';

async function register(userData) {
    await getDB().collection(collectionName).insertOne(userData);

    return userData;
}

async function findByEmail(email) {
    await getDB()
        .collection(collectionName)
        .findOne({ email });    
}

module.exports = {
    register,
    findByEmail,
};