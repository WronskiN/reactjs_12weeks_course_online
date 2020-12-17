import { sum } from './Sum';

describe('testing function sum with jest', () => {
  it('should display function sum', () => {
    expect(sum(5, 5)).toBe(10);
  });
});
