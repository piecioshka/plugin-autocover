var assert = require('assert');
var titleParts = require('../lib/titleparts');

describe('title parts', function () {
    it('should split and group across lines', function () {
        var parts = titleParts(
            // Title
            'The Swift Programming Language 中文版',
            // Font
            'Arial',
            // Boundary dimensions
            1800 * 0.8, // Width
            2360 * 0.1 // Height
        );

        assert.equal(parts.length, 4, 'Title should be split across 4 lines');
    });
});
