class Query {
    constructor(connection, table = '') {
        this._select = '';
        this._from = table;
        this._where = [];
        this._order = '';
    }

    select(...fields) {
        this._select = fields.join(', ');

        return this;
    }

    from(table) {
        this._from = table;

        return this;
    }

    where(field, value) {
        this._where.push(`${field} = ${value}`);

        return this;
    }

    order(field, direction) {
        this._order = `${field} ${direction.toUpperCase()}`;

        return this;
    }

    exec() {
        if (!this.connection) throw new Error();

        return new Promise((reject, resolve) => {
            connection.query(this.toSQL(), (error, results, fields) => {
                if (error) return reject(error);
                
                resolve(results);
            });
        });
    }

    then(resolve, reject) {
        return this.exec().then(resolve, reject);
    }

    toSQL() {
        let sql = `SELECT ${this._select} FROM ${this._from}`;

        sql += this._where ? ` WHERE ${this._where.join(' AND ')}` : '';
        sql += this._order ? ` ORDER BY ${this._order}` : '';

        return sql;
    }
}

module.exports = Query;