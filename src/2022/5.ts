export function part1(input: string) {
  const stacks = createStacks(input);
  const moves = parseMoves(input);

  moves.forEach((move) => {
    const cargo = stacks[move.from - 1]
      .splice(stacks[move.from - 1].length - move.count, move.count)
      .reverse();
    stacks[move.to - 1].push(...cargo);
  });

  return stacks.reduce((result, stack) => result + stack[stack.length - 1], '');
}

export function part2(input: string) {
  const stacks = createStacks(input);
  const moves = parseMoves(input);

  moves.forEach((move) => {
    const cargo = stacks[move.from - 1].splice(
      stacks[move.from - 1].length - move.count,
      move.count
    );
    stacks[move.to - 1].push(...cargo);
  });

  return stacks.reduce((result, stack) => result + stack[stack.length - 1], '');
}

export function createStacks(input: string) {
  const stackNumbers = input
    .match(/^[\d|\s]*\n$/gm)![0]
    .trim()
    .replaceAll(/\s+/g, ' ')
    .split(' ')
    .map((num) => parseInt(num));

  const stacklines = input.match(/.*(?=\n\s\d)/gs)![0].split('\n');

  return stackNumbers.map((num) =>
    stacklines
      .reduce<string[]>((stack, line) => {
        const cargo = line.charAt((num - 1) * 4 + 1);
        if (cargo !== ' ') {
          stack.push(cargo);
        }
        return stack;
      }, [])
      .reverse()
  );
}

export function parseMoves(input: string): StackMove[] {
  return input.split('\n').reduce<StackMove[]>((moves, line) => {
    const move = line.match(/move (\d+) from (\d+) to (\d+)/);
    if (move) {
      moves.push({
        count: parseInt(move[1]),
        from: parseInt(move[2]),
        to: parseInt(move[3]),
      });
    }
    return moves;
  }, []);
}
export interface StackMove {
  count: number;
  from: number;
  to: number;
}
