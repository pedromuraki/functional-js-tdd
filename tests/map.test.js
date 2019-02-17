import map from '../src/map';
import { expect } from 'chai';

it('should exist map method', () => {
  expect(map).to.exist;
});

it('map should be a function', () => {
  expect(map).to.be.a('function');
});

it('map should return an array', () => {
  expect(map([], () => { })).to.be.an('array');
});

it('map should receive an array as first param', () => {
  expect(() => map('some string', 2)).to.throw(Error, 'map should receive an array as first parameter');
});

it('map should receive a function as second param', () => {
  expect(() => map([], 2)).to.throw(Error, 'map should receive a function as second parameter');
});

it('map should call fn using each array item as first param', () => {
  expect(map([1, 2, 3], (item) => item + 1)).to.be.eql([2, 3, 4]);
  expect(map([1, 2, 3], (item) => item + 10)).to.be.eql([11, 12, 13]);
});

it('map should call fn using each array item index as second param', () => {
  expect(map(['apple', 'orange'], (item, index) => `The index of ${item} is ${index}`)).to.be.eql(['The index of apple is 0', 'The index of orange is 1']);
});

it('map should call fn using the array itself as third param', () => {
  expect(map(['apple', 'orange'], (item, index, arr) => arr)).to.be.eql([['apple', 'orange'], ['apple', 'orange']]);
});
