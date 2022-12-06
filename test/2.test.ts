import { part1, part2 } from '../src/2022/2';

const data = `A Y
B X
C Z`;

describe('Day 2 Tests', () => {
  it('should exist', () => {
    expect(part1).toBeDefined();
    expect(part2).toBeDefined();
  });

  it('should solve part 1', () => {
    expect(part1(data)).toBe(15);
  });

  it('should solve part 2', () => {
    expect(part2(data)).toBe(12);
  });
});
