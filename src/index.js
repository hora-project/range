/**
 * Returns a lazy sequence of nums from start (inclusive) to end
 * (exclusive), by step, where start defaults to 0, step to 1, and end to
 * infinity. When step is equal to 0, returns an infinite sequence of
 * start. When start is equal to end, returns empty list.
 *
 * @param {Number} [start=0] [description]
 * @param {Number} [end=Infinity] [description]
 * @param {Number} [step=1] [description]
 * @return {Range}
 */
export default function range(start = 0, end = Infinity, step = 1) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }
  return new Range(start, end, step);
}

/**
 * @typedef Range
 * @property {Number} start [description]
 * @property {Number} end [description]
 * @property {Number} step [description]
 */

class Range {
  constructor(start, end, step) {
    this.start = start;
    this.end = end;
    this.step = step;
    Object.freeze(this);
  }

  [Symbol.iterator]() {
    return new RangeIterator(this.start, this.end, this.step);
  }
}

class RangeIterator {
  constructor(start, end, step) {
    this.i = start;
    this.end = end;
    this.step = step;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    let value = this.i;

    if (this.step > 0 && value >= this.end) {
      return { done: true };
    } else if (this.step < 0 && value <= this.end) {
      return { done: true };
    }

    this.i += this.step;

    return { value: value };
  }
}
