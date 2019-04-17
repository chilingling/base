var expect = require('expect.js');

var rangejs = require('../dist/index.js');
var range = rangejs.range
// var range = require('../src/index.js');

describe('unit test', function() {
    this.timeout(1000);

    describe('number range', function() {
        it('1-5', function() {
            expect(range(1, 5)).to.eql([1,2,3,4,5]);
        });
        it('-2-2', function() {
            expect(range(-2, 2)).to.eql([-2,-1,0,1,2]);
        });
        it('2- -2', function() {
            expect(range(2, -2)).to.eql([2,1,0,-1,-2]);
        });
        it('2- -2 0.5 step', function() {
            expect(range(2, -2, 0.5)).to.eql([2,1.5,1,0.5,0,-0.5,-1,-1.5,-2]);
        });
        it('0-1 0.1 step', function() {
            expect(range(0, 1, 0.1)).to.eql([0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]);
        });
        it('0-0.1 0.01 step', function() {
            expect(range(0, 0.1, 0.01)).to.eql([0,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1]);
        });
    });

    describe('character range', function() {
        it('a-z', function() {
            expect(range('a', 'd')).to.eql(['a', 'b', 'c', 'd']);
        });
        it('e-g', function() {
            expect(range('e', 'g')).to.eql(['e', 'f', 'g']);
        });
        it('A-D', function() {
            expect(range('A', 'D')).to.eql(['A', 'B', 'C', 'D']);
        });
        it('E-G', function() {
            expect(range('E', 'G')).to.eql(['E', 'F', 'G']);
        });
        it('Y-b', function() {
            expect(range('Y', 'b')).to.eql(['Y', 'Z', 'a', 'b']);
        });
    });
    describe('ruby style range', function() {
        it('1..5', function() {
            expect(range('1..5')).to.eql([1, 2, 3, 4, 5]);
        });
        it('1...5', function() {
            expect(range('1...5')).to.eql([1, 2, 3, 4]);
        });
        it('20..22', function() {
            expect(range('20..22')).to.eql([20, 21, 22]);
        });
        it('-2..2', function() {
            expect(range('-2..2')).to.eql([-2, -1, 0, 1, 2]);
        });
        it('2..-2', function() {
            expect(range('2..-2')).to.eql([2, 1, 0, -1, -2]);
        });
        it('Y..b', function() {
            expect(range('Y..b')).to.eql(['Y', 'Z', 'a', 'b']);
        });
        it('a..d', function() {
            expect(range('a..d')).to.eql(['a', 'b', 'c', 'd']);
        });
        it('e..g', function() {
            expect(range('e..g')).to.eql(['e', 'f', 'g']);
        });
        it('A..D', function() {
            expect(range('A..D')).to.eql(['A', 'B', 'C', 'D']);
        });
    });

});
