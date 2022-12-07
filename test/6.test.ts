import { part1, part2 } from '../src/2022/6';

const data = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;

describe('Day 6 Tests', () => {
  it('should exist', () => {
    expect(part1).toBeDefined();
    expect(part2).toBeDefined();
  });

  it('should solve part 1', () => {
    expect(part1(data)).toBe(7);
  });

  it('should solve part 2', () => {
    expect(part2(data)).toBe(19);
  });
});
