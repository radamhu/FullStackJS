// dekonstruktúrálással csak a mongoclient-re van szükségem a mongodb objectből
const { MongoClient } = require('mongodb');
const { dbURI } = require('../config');

// mivel nem deviniáljuk ezért undefined értéket vesz fel
let mongoClient;

// mongo client létrehozása, connect függvény
async function connect() {
    mongoClient = await MongoClient.connect(
      dbURI,
      { useUnifiedTopology: true },
    );
  }

function getDB() {
  return mongoClient.db(mongoClient.s.options.db);
}

module.exports = {
  connect,
  getDB,
};