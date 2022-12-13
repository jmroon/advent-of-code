export function part1(input: string) {
  const pairs = input
    .split('\n\n')
    .map((pair) => pair.split('\n').map((packet) => JSON.parse(packet)) as [Packet, Packet]);

  const counts = pairs.reduce((counts, pair, index) => {
    return compare(pair[0], pair[1]) === -1 ? [...counts, index + 1] : counts;
  }, [] as number[]);

  console.log(counts);

  return counts.reduce((count, value) => count + value, 0);
}

export function part2(input: string) {
  const packets = input
    .replaceAll('\n\n', '\n')
    .split('\n')
    .map((packet) => JSON.parse(packet) as Packet);

  const dividers = [[[2]], [[6]]];
  packets.push(...dividers);

  packets.sort(compare);

  return (packets.indexOf(dividers[0]) + 1) * (packets.indexOf(dividers[1]) + 1);
}

export type Packet = Array<number[] | number | Packet> | number;

export function compare(left: Packet, right: Packet): number {
  if (typeof left === 'number' && typeof right === 'number') {
    if (left < right) return -1;
    if (left > right) return 1;
    return 0;
  }

  if (Array.isArray(left) && Array.isArray(right)) {
    let i = 0;
    while (i < left.length && i < right.length) {
      const result = compare(left[i], right[i]);
      if (result !== 0) return result;
      i++;
    }
    return compare(left.length, right.length);
  }

  if (typeof left === 'number' && Array.isArray(right)) {
    return compare([left], right);
  }

  if (Array.isArray(left) && typeof right === 'number') {
    4;
    return compare(left, [right]);
  }

  throw new Error('invalid input');
}
