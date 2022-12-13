export function part1(input: string) {
  const MAX_ROUNDS = 20;

  const monkeys: Monkey[] = parseMonkeys(input);

  for (let round = 0; round < MAX_ROUNDS; round++) {
    monkeys.forEach((monkey) => {
      while (monkey.hasItems()) {
        monkey.inspect();
      }
      while (monkey.hasItems) {
        const item = monkey.items.shift()!;
        const nextMonkey = monkey.test(item);
        monkeys[nextMonkey].items.push(item);
      }
    });
  }

  console.log(monkeys.map((monkey) => monkey.inspected));

  return monkeys.reduce((shenanigans, monkey) => shenanigans * monkey.inspected, 1);
}

export function part2(input: string) {
  return 'not implemented';
}

export function parseMonkeys(input: string): Monkey[] {
  return input.split('\n\n').map((monkey) => {
    let items = /Starting items: (.*)/
      .exec(monkey)![1]
      .split(', ')
      .map((item) => parseInt(item));

    let inspected = 0;

    function hasItems() {
      return items.length > 0;
    }

    function inspect() {
      operation(items[0]);
      inspected++;
    }

    function bored() {
      items = items.map((item) => Math.floor(item / 3));
    }

    const opFunc = /Operation: new = (.*)/.exec(monkey)![1];
    const operation = new Function('old', `return ${opFunc}`) as (old: number) => number;

    const divisible = /Test: divisible by (\d*)/.exec(monkey)![1];
    const ifTrue = /If true: throw to monkey (\d*)/.exec(monkey)![1];
    const ifFalse = /If false: throw to monkey (\d*)/.exec(monkey)![1];

    const test = new Function('item', `return item % ${divisible} === 0 ? ${ifTrue} : ${ifFalse}`) as (
      item: number
    ) => number;

    return {
      inspected,
      hasItems,
      inspect,
      bored,
      test,
    };
  });
}

interface Monkey {
  inspected: number;
  hasItems: () => boolean;
  inspect: () => void;
  bored: () => void;
  test: (item: number) => number;
}
