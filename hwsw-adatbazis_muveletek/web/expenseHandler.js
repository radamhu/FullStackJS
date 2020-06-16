// egyetlen feladata hogy ezeket a HTTP kéréseket fogja
// async function-ök
// mindegyik metódusunk mivel egy handler-ről van szó, megjapja a req, res object-et
const joi = require('joi');
const expenses = require('../db/expense');
const logger = require('../logger');

expenseSchema = joi.object({
    title: joi.string().required(),
    amount: joi.number().min(1).required(),
}).unknown().required();

async function get(req, res) {
    const expenseID = req.params.id;
    const result = await expenses.get(expenseID);
    if (!result) {
        res.status(404);
        res.end();
    }

    res.send(result);
}

async function list(req, res) {
    const result = await expenses.list();
    res.send(result);
}

// itt már validálni kell mit viszünk be
// requestnek a body-jában, nem paraméterklnt érkezik be az infó a klienstől, hanem a body-ban
// bodyparser.json ami szépen elérhető a request.body-n keresztül
async function insert(req, res) {
    logger.info(JSON.stringify(req.body));
    try {
        joi.attempt(req.body, expenseSchema);
    } catch (error) {
        res.status(400);
        res.send(err.details[0].message);
    }

    const result = await expenses.insert(req.body);

    res.status(201);
    res.send(result);
}

async function update(req, res) {
    logger.info(JSON.stringify(req.body));
    try {
        joi.attempt(req.body, expenseSchema);
    } catch (error) {
        res.status(400);
        res.send(err.details[0].message);
    }

    const expenseID = req.params.id;

    const result = await expenses.update(expenseID, req.body);

    res.status(201);
    res.send(result);    
}

async function remove(req, res) {
    const expenseID = req.params.id;
    
    await expenses.remove(expenseID);

    res.status(204);
    res.end();
}

module.exports = {
    get, list, insert, update, remove,
}