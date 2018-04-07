const { expect } = require('chai');
const sinon = require('sinon');

const authorize = require('./auth');

describe('authorize', () => {
    it('should allow access to admins', () => {
        let req = {
            user: {
                roles: ['user', 'admin'],
                isAdmin() {
                    return this.roles.includes('admin');
                }
            }
        };
        let res = {};
        let next = sinon.spy();
        sinon.spy(req.user, 'isAdmin');
        
        authorize(req, res, next);

        expect(req.user).to.exist;
        expect(req.user.isAdmin.returned(true)).to.equal(true);
        expect(next.calledOnce).to.equal(true);
    });

    it('should call `next` with an error for non admins', () => {
        let req = {
            user: {
                roles: ['user'],
                isAdmin() {
                    return this.roles.includes('admin');
                }
            }
        };
        let res = {};
        let next = sinon.spy();
        
        authorize(req, res, next);

        expect(next.calledOnceWith(new Error('Not authorized'))).to.equal(true);
    });
});