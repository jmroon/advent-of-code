import { part1, part2 } from '../src/2022/1';

const data = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

describe('Day 1 Tests', () => {
  it('should exist', () => {
    expect(part1).toBeDefined();
    expect(part2).toBeDefined();
  });

  it('should solve part 1', () => {
    expect(part1(data)).toBe(24000);
  });

  it('should solve part 2', () => {
    expect(part2(data)).toBe(45000);
  });
});
