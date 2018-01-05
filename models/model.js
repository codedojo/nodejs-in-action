const Query = require('./query');
const connection = require('../services/mysql');

class Model {
    constructor() {
        this._connection = connection;
    }
}

Model.Query = Query;

module.exports = Model;