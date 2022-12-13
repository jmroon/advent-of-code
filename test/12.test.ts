import { part1, part2, directionValid } from '../src/2022/12';

const data = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`;

describe('Day 12 Tests', () => {
  it('should exist', () => {
    expect(part1).toBeDefined();
    expect(part2).toBeDefined();
  });

  it('should solve part 1', () => {
    expect(part1(data)).toBe(31);
  });

  it('should validate direction', () => {
    expect(directionValid('S', 'a')).toBe(true);
    expect(directionValid('S', 'b')).toBe(true);
    expect(directionValid('S', 'c')).toBe(false);
    expect(directionValid('a', 'a')).toBe(true);
    expect(directionValid('a', 'b')).toBe(true);
    expect(directionValid('b', 'a')).toBe(true);
    expect(directionValid('z', 'a')).toBe(true);
    expect(directionValid('a', 'E')).toBe(false);
    expect(directionValid('z', 'E')).toBe(true);
    expect(directionValid('a', 'c')).toBe(false);
    expect(directionValid('a', undefined)).toBe(false);
  });

  it('should solve part 2', () => {
    expect(part2(data)).toBe(29);
  });
});
