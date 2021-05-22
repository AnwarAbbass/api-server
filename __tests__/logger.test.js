'use strict';

const logger = require('../src/middleware/logger.js');

describe('logger module test', () => {

    let consolespy;
    const req = {}, res = {}, next = jest.fn();

    beforeEach(() => consolespy = jest.spyOn(console, 'log'));
    afterEach(() => consolespy.mockRestore());

    it('console log correct info ', async () => {
        logger(req, res, next);

        expect(consolespy).toHaveBeenCalled();
        expect(next).toHaveBeenCalledWith();

    });

});