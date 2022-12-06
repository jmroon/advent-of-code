export function part1(input: string) {
  const lines = input.split('\n');
  const ranges = lines.map((line): { elf1Range: Range; elf2Range: Range } => {
    const [elf1, elf2] = line.split(',');
    const [elf1Start, elf1End] = elf1.split('-').map((num) => parseInt(num));
    const [elf2Start, elf2End] = elf2.split('-').map((num) => parseInt(num));
    return {
      elf1Range: { start: elf1Start, end: elf1End },
      elf2Range: { start: elf2Start, end: elf2End },
    };
  });
  return ranges.reduce((acc, range) => {
    if (
      (range.elf1Range.start >= range.elf2Range.start &&
        range.elf1Range.end <= range.elf2Range.end) ||
      (range.elf2Range.start >= range.elf1Range.start &&
        range.elf2Range.end <= range.elf1Range.end)
    ) {
      acc += 1;
    }
    return acc;
  }, 0);
}

export function part2(input: string) {
  const lines = input.split('\n');
  const ranges = lines.map((line): { elf1Range: Range; elf2Range: Range } => {
    const [elf1, elf2] = line.split(',');
    const [elf1Start, elf1End] = elf1.split('-').map((num) => parseInt(num));
    const [elf2Start, elf2End] = elf2.split('-').map((num) => parseInt(num));
    return {
      elf1Range: { start: elf1Start, end: elf1End },
      elf2Range: { start: elf2Start, end: elf2End },
    };
  });
  return ranges.reduce((acc, range) => {
    let elf1Sections: number[] = [];
    let elf2Sections: number[] = [];
    for (let i = range.elf1Range.start; i <= range.elf1Range.end; i++) {
      elf1Sections.push(i);
    }
    for (let i = range.elf2Range.start; i <= range.elf2Range.end; i++) {
      elf2Sections.push(i);
    }
    return elf1Sections.find((num) => elf2Sections.includes(num))
      ? (acc += 1)
      : acc;
  }, 0);
}

interface Range {
  start: number;
  end: number;
}
