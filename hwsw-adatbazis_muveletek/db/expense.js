// ide kerül minden olyan DB művelet ami a kiadásokkal kapcsolatos
const { getDB } = require('./index');
const { ObjectID } = require('mongodb');

// rakd ki a collection nevét változóba,  nagyon nehéz elírni, így meg váltoval foglalkozhatsz
const collectionName = 'expenses';

async function list() {
    const result = await getDB().collection(collectionName).find().toArray();
    return result;
}

async function get(id) {
    // csak a mondo-nál kell figyelni, hogy ObjectID-t használjunk, z a db-ben az entitás egyedi azonosítóka
    const result = await getDB().collection(collectionName).findOne({ _id: ObjectID(id) });
    return result;    
}

// nincs szükség itt result-ra, hogy visszakpatuk az objectid-t, hasonló meta üzenetet, hogy sikersen el lett e végezve a műveletet
// hanem data-t amit await-elve insertálunk , azt zseretném visszaküldeni, nem pedig a válasz üzenetet, amit az insert üzenetre kapunk
async function insert(data) {
    await getDB().collection(collectionName).insertOne(data);
    return data;    
}

async function update(id, data) {
    // $set: nem data-t adok át mangodb-nek, hanem műveletet
    // Mihály Tóth: akkor az updateOne-nak meg lehet adni, hogy csak a amount-ot frissitse a title-t ne
    // Bertalan Miklos: updateOne({ _id: 'id' }, { $set: { amount: 0 }})
    await getDB().collection(collectionName).updateOne({ _id: ObjectID(id) }, { $set: data });

    return data;
}

async function remove(id) {
    await getDB().collection(collectionName).deleteOne({ _id: ObjectID(id) });
}
module.exports = {
    list,
    get,
    insert,
    update,
    remove,
}