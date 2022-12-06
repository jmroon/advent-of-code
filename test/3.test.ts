import { part1, part2 } from '../src/2022/3';

const data = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

describe('Day 3 Tests', () => {
  it('should solve part 1', () => {
    expect(part1(data)).toBe(157);
  });

  // it('should solve part 2', () => {
  //   expect(part2(data)).toBe(12);
  // });
});
