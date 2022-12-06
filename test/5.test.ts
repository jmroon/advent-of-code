import { StackMove } from './../src/2022/5';
import { part1, part2, createStacks, parseMoves } from '../src/2022/5';

const data = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

describe('Day 5 Tests', () => {
  it('should exist', () => {
    expect(part1).toBeDefined();
    expect(part2).toBeDefined();
  });

  it('should solve part 1', () => {
    expect(part1(data)).toBe('CMZ');
  });

  it('should create stacks from input', () => {
    expect(createStacks(data)).toEqual([['Z', 'N'], ['M', 'C', 'D'], ['P']]);
  });

  it('should parse moves', () => {
    const expectedMoves: StackMove[] = [
      { count: 1, from: 2, to: 1 },
      { count: 3, from: 1, to: 3 },
      { count: 2, from: 2, to: 1 },
      { count: 1, from: 1, to: 2 },
    ];

    expect(parseMoves(data)).toEqual(expectedMoves);
  });

  it('should solve part 2', () => {
    expect(part2(data)).toBe('MCD');
  });
});
