export function part1(input: string) {
  const lines = input.split('\n');
  const characterInBoth = lines.map((line) =>
    getCommonCharacter(splitInHalf(line))
  );
  return characterInBoth.reduce(
    (score, char) => (score += getLetterScore(char)),
    0
  );
}

export function part2(input: string) {
  const groups = getElfGroups(input);
  const commonCharacters = groups.map((group) => getCommonCharacter(group));
  return commonCharacters.reduce(
    (score, char) => (score += getLetterScore(char)),
    0
  );
}

export const getElfGroups = (input: string): [string, string, string][] => {
  const regexp = /.*\n.*\n.*\n?/g;
  const groups = input.match(regexp)!.map((group): [string, string, string] => {
    const [elf1, elf2, elf3] = group.split('\n');
    return [elf1, elf2, elf3];
  });
  return groups;
};

export const getLetterScore = (letter: string) => {
  if (isLowercaseLetter(letter)) {
    return letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 64 + 26;
  }
};

export const isLowercaseLetter = (char: string) =>
  char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;

export const splitInHalf = (str: string): [string, string] => {
  const half = Math.floor(str.length / 2);
  return [str.slice(0, half), str.slice(half)];
};

export const getCommonCharacter = ([
  firstRucksack,
  secondRucksack,
  thirdRucksack,
]: [string, string, string?]) => {
  const firstRucksackChars = firstRucksack.split('');
  const secondRucksackChars = secondRucksack.split('');

  // this will keep it working for 2 rucksacks even if the third one is undefined
  const thirdRucksackChars = thirdRucksack?.split('') ?? firstRucksackChars;

  const commonToAll = firstRucksackChars.filter(
    (char) =>
      secondRucksackChars.includes(char) && thirdRucksackChars.includes(char)
  );

  return commonToAll[0];
};
