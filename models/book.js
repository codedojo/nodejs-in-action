const Model = require('./model');

const Query = Model.Query;

module.exports = class Book extends Model {
    static find(done) {
        return new Query(this._connection, 'book')
            .select('*');
    }

    static findWhere(where, done) {
        connection.query(`SELECT * FROM books WHERE `, (error, results, fields) => {
            if (error) return done(error);
            
            done(results);
        });
    }

    static create(data, done) {
        let sql = `
            INSERT INTO books ()
            VALUES (${}, ${}, ${})`; // mysql.escape(adr)

        
        
        connection.query('SELECT * FROM books', (error, results, fields) => {
            if (error) return done(error);
            
            done();
        });
    }


}