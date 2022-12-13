import { getDirectionScore, part1, part2 } from '../src/2022/8';

const data = `30373
25512
65332
33549
35390`;

describe('Day 8 Tests', () => {
  it('should exist', () => {
    expect(part1).toBeDefined();
    expect(part2).toBeDefined();
  });

  it('should solve part 1', () => {
    expect(part1(data)).toBe(21);
  });

  it('should solve part 2', () => {
    expect(part2(data)).toBe(8);
  });

  it('should get the score', () => {
    expect(getDirectionScore([3, 3], 5)).toBe(2);
  });
});
