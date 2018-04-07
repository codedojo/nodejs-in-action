const should = require('chai').should();

const { formatDateSync } = require('../util/format');

describe('formatDateSync', function() {
    it('should exist', function() {
        formatDateSync.should.exist;
    });

    describe('', function() {
        let date;

        beforeEach(function() {
            date = new Date('2018-02-10');
        });

        it('should return a string', function() {
            let actual = typeof formatDateSync(date);
            let expected = 'string';

            actual.should.be.string;
        });
        
        it('should return a formatted string', function() {
            let actual = formatDateSync(date);
            let expected = '10 Февраля 2018 г.';
            
            actual.should.be.string('10 Февраля 2018 г.');
        });
    });

    it('should return a formatted string for any date', function() {
        let date = new Date('2018-02-11');
        let actual = formatDateSync(date);
        let expected = '11 Февраля 2018 г.';

        actual.should.be.string('11 Февраля 2018 г.');
    });

    it('should throw an error if a date object is not given', function() {
        formatDateSync.should.throw;
    });
});