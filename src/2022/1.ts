export function part1(input: string) {
  return caloriesByElfDescending(input)[0];
}

export function part2(input: string) {
  const caloriedByElfDescending = caloriesByElfDescending(input);
  return (
    caloriedByElfDescending[0] +
    caloriedByElfDescending[1] +
    caloriedByElfDescending[2]
  );
}

function caloriesByElfDescending(input: string): number[] {
  // get an array of numbers for each elf
  const calorieListByElf = input
    .split('\n\n')
    .map((elf) => elf.split('\n').map((item) => parseInt(item)));

  // reduce the array of calories to get the total calories for each elf
  const caloriesByElf = calorieListByElf.map((calorieListByElf) =>
    calorieListByElf.reduce((total, calories) => (total += calories), 0)
  );

  // sort caloriesByElf in descending order
  caloriesByElf.sort((a, b) => b - a);

  return caloriesByElf;
}
