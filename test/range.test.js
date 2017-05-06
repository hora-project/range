import { assert } from 'chai';

import range from '../src';

const r = (...args) => Array.from(range(...args));

describe('@hora/range', () => {
  it('range', () => {
    assert.deepEqual(r(1, 1), []);
    assert.deepEqual(r(3), [0, 1, 2]);
    assert.deepEqual(r(1, 3), [1, 2]);
    assert.deepEqual(r(0, 4, 2), [0, 2]);
    assert.deepEqual(r(0, 5, 2), [0, 2, 4]);
    assert.deepEqual(r(0, 6, 2), [0, 2, 4]);
    assert.deepEqual(r(0, 7, 2)[(0, 2, 4, 6)]);
    assert.deepEqual(r(100, 0, -10), [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]);
    let a = [8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7];
    assert.deepEqual(r(8, -8, -1), a);
  });
});
