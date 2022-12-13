import { compare, part1, part2 } from '../src/2022/13';

const data = `[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`;

describe('Day 13 Tests', () => {
  it('should exist', () => {
    expect(part1).toBeDefined();
    expect(part2).toBeDefined();
  });

  it('should solve part 1', () => {
    expect(part1(data)).toBe(13);
  });

  it('should compare pair 1', () => {
    expect(compare([1, 1, 3, 1, 1], [1, 1, 5, 1, 1])).toBe(-1);
  });

  it('should compare pair 2', () => {
    expect(compare([[1], [2, 3, 4]], [[1], 4])).toBe(-1);
  });

  it('should compare pair 3', () => {
    expect(compare([9], [[8, 7, 6]])).toBe(1);
  });

  it('should compare pair 4', () => {
    expect(compare([[4, 4], 4, 4], [[4, 4], 4, 4, 4])).toBe(-1);
  });

  it('should compare pair 5', () => {
    expect(compare([7, 7, 7, 7], [7, 7, 7])).toBe(1);
  });

  it('should compare pair 6', () => {
    expect(compare([], [3])).toBe(-1);
  });

  it('should compare pair 7', () => {
    expect(compare([[[]]], [[]])).toBe(1);
  });

  it('should compare pair 8', () => {
    expect(compare([1, [2, [3, [4, [5, 6, 7]]]], 8, 9], [1, [2, [3, [4, [5, 6, 0]]]], 8, 9])).toBe(1);
  });

  it('should return 1 if right side doesnt run out of items', () => {
    expect(compare([[]], [[[]]])).toBe(-1);
  });

  it('should return 0 for same length lists with equal members', () => {
    expect(compare([4, 4, 4], [4, 4, 4])).toBe(0);
  });

  it('should solve part 2', () => {
    expect(part2(data)).toBe(140);
  });
});
