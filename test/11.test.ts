import { parseMonkeys, part1, part2 } from '../src/2022/11';

const data = `Monkey 0:
Starting items: 79, 98
Operation: new = old * 19
Test: divisible by 23
  If true: throw to monkey 2
  If false: throw to monkey 3

Monkey 1:
Starting items: 54, 65, 75, 74
Operation: new = old + 6
Test: divisible by 19
  If true: throw to monkey 2
  If false: throw to monkey 0

Monkey 2:
Starting items: 79, 60, 97
Operation: new = old * old
Test: divisible by 13
  If true: throw to monkey 1
  If false: throw to monkey 3

Monkey 3:
Starting items: 74
Operation: new = old + 3
Test: divisible by 17
  If true: throw to monkey 0
  If false: throw to monkey 1`;

describe('Day 11 Tests', () => {
  it('should exist', () => {
    expect(part1).toBeDefined();
    expect(part2).toBeDefined();
  });

  it('should parse monkey', () => {
    const monkey = parseMonkeys(data)[0];

    expect(monkey.items).toEqual([79, 98]);
    expect(monkey.operation(1)).toBe(19);
    expect(monkey.test(1)).toBe(3);
  });

  it('should solve part 1', () => {
    expect(part1(data)).toBe(10605);
  });

  // it('should solve part 2', () => {
  //   expect(part2(data)).toBe();
  // });
});
