import {
  getLetterScore,
  getCommonCharacter,
  part1,
  part2,
  splitInHalf,
  getElfGroups,
} from './../src/2022/3';

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

  it('should split in half', () => {
    expect(splitInHalf('abcdefgh')).toEqual(['abcd', 'efgh']);
  });

  it('should should get letter score', () => {
    expect(getLetterScore('a')).toBe(1);
    expect(getLetterScore('A')).toBe(27);
  });

  it('should get the character in both rucksacks', () => {
    expect(getCommonCharacter(['abcd', 'efga'])).toBe('a');
  });

  it('should solve part 2', () => {
    expect(part2(data)).toBe(70);
  });

  it('should split elves into groups', () => {
    expect(getElfGroups(data)).toEqual([
      [
        'vJrwpWtwJgWrhcsFMMfFFhFp',
        'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
        'PmmdzqPrVvPwwTWBwg',
      ],
      [
        'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
        'ttgJtRGJQctTZtZT',
        'CrZsJsPPZsGzwwsLwLmpwMDw',
      ],
    ]);
  });
});
