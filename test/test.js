var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-verthorz', function () {

    it('handles padding-vertical', function (done) {
        test('a { padding-vertical: 20px; }', 'a { padding-top: 20px; padding-bottom: 20px; }', { }, done);
    });

    it('handles padding-horizontal', function (done) {
        test('a { padding-horizontal: 1.5em; }', 'a { padding-left: 1.5em; padding-right: 1.5em; }', { }, done);
    });

    it('handles padding-vert', function (done) {
        test('a { padding-vert: 20px; }', 'a { padding-top: 20px; padding-bottom: 20px; }', { }, done);
    });

    it('handles padding-horz', function (done) {
        test('a { padding-horz: 1.5em; }', 'a { padding-left: 1.5em; padding-right: 1.5em; }', { }, done);
    });

    it('handles pv', function (done) {
        test('a { pv: 2rem; }', 'a { padding-top: 2rem; padding-bottom: 2rem; }', { }, done);
    });

    it('handles ph', function (done) {
        test('a { ph: 2rem; }', 'a { padding-left: 2rem; padding-right: 2rem; }', { }, done);
    });

    it('handles margin-vert', function (done) {
        test('a { margin-vert: 2rem; }', 'a { margin-top: 2rem; margin-bottom: 2rem; }', { }, done);
    });

    it('handles margin-horz', function (done) {
        test('a { margin-horz: 2rem; }', 'a { margin-left: 2rem; margin-right: 2rem; }', { }, done);
    });

    it('handles margin-vertical', function (done) {
        test('a { margin-vertical: 2rem; }', 'a { margin-top: 2rem; margin-bottom: 2rem; }', { }, done);
    });

    it('handles margin-horizontal', function (done) {
        test('a { margin-horizontal: 2rem; }', 'a { margin-left: 2rem; margin-right: 2rem; }', { }, done);
    });

    it('handles mv', function (done) {
        test('a { mv: 2rem; }', 'a { margin-top: 2rem; margin-bottom: 2rem; }', { }, done);
    });

    it('handles mh', function (done) {
        test('a { mh: 2rem; }', 'a { margin-left: 2rem; margin-right: 2rem; }', { }, done);
    });

    it('handles auto', function (done) {
        test('a { ph: 3rem; mh: auto; }', 'a { padding-left: 3rem; padding-right: 3rem; margin-left: auto; margin-right: auto; }', { }, done);
    });

    it('handles multiples', function (done) {
        test('a { padding-vert: 3rem; mh: 2rem; }', 'a { padding-top: 3rem; padding-bottom: 3rem; margin-left: 2rem; margin-right: 2rem; }', { }, done);
    });

    it('handles multiple values', function (done) {
        test('a { padding-vert: 3rem 1rem; }', 'a { padding-top: 3rem; padding-bottom: 1rem; }', { }, done);
    });

    it('handles failures', function (done) {
        test('a { padding-nope: 20px; }', 'a { padding-nope: 20px; }', { }, done);
    });

});
