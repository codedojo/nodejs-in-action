const { expect } = require('chai');
const sinon = require('sinon');

const session = require('./session');

describe('session', () => {
    let req;
    let res;
    let next;

    it('should create a session object on the `req` object', () => {
        // Arrange
        let req = {};
        let res = {};
        let next = sinon.spy();

        // Act
        session(req, res, next);

        // Assert
        expect(req.session).to.exist;
    });

    it('should pass control to the next middleware function', () => {
        let req = {};
        let res = {};
        let next = sinon.spy();
        
        session(req, res, next);

        expect(next.calledOnce).to.equal(true);
    });
});