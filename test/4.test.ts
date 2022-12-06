import { part1, part2 } from '../src/2022/4';

const data = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

describe('Day 4 Tests', () => {
  it('should exist', () => {
    expect(part1).toBeDefined();
    expect(part2).toBeDefined();
  });

  it('should solve part 1', () => {
    expect(part1(data)).toBe(2);
  });

  it('should solve part 2', () => {
    expect(part2(data)).toBe(4);
  });
});
