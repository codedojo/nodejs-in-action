const { expect } = require('chai');
const sinon = require('sinon');

const controller = require('./index');

describe('controller', () => {
    describe('renderIndex', () => {
        it('should render index', () => {
            let req = {};
            let res = { render: sinon.spy() };

            controller.renderIndex(req, res);

            expect(res.render.calledOnce).to.equal(true);
            expect(res.render.firstCall.args[0]).to.equal('index');
        });
    });
});