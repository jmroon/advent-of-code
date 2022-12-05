export default (input: string) => {
  // get an array of numbers for each elf
  const calorieListByElf = input
    .split("\n\n")
    .map((elf) => elf.split("\n").map((item) => parseInt(item)));

  // reduce the array of calories to get the total calories for each elf
  const caloriesByElf = calorieListByElf.map((calorieListByElf) =>
    calorieListByElf.reduce((total, calories) => (total += calories), 0)
  );

  // sort caloriesByElf in descending order
  caloriesByElf.sort((a, b) => b - a);

  console.log(caloriesByElf[0]);
};
