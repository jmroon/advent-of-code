export function part1(input: string) {
  const moves = input.split('\n');
  const scores = moves.map((move) => score(move.charAt(0), move.charAt(2)));
  return scores.reduce((total, score) => (total += score), 0);
}

export function part2(input: string) {
  const lines = input.split('\n');
  const moves = lines.map((line) => mapMove(line.charAt(0), line.charAt(2)));
  const scores = moves.map((move) => score(move.charAt(0), move.charAt(2)));
  return scores.reduce((total, score) => (total += score), 0);
}

const score = (opponent: string, me: string): number => {
  // we can certainly use a circular array here or a modulus, but I just can't be bothered
  // or a map would make things cleaner as well

  let score = 0;

  switch (me) {
    case 'X':
      score += 1;
      break;
    case 'Y':
      score += 2;
      break;
    case 'Z':
      score += 3;
      break;
  }

  switch (opponent) {
    case 'A':
      switch (me) {
        case 'X':
          score += 3;
          break;
        case 'Y':
          score += 6;
          break;
        case 'Z':
          score += 0;
          break;
      }
      break;
    case 'B':
      switch (me) {
        case 'X':
          score += 0;
          break;
        case 'Y':
          score += 3;
          break;
        case 'Z':
          score += 6;
          break;
      }
      break;
    case 'C':
      switch (me) {
        case 'X':
          score += 6;
          break;
        case 'Y':
          score += 0;
          break;
        case 'Z':
          score += 3;
          break;
      }
      break;
  }

  return score;
};

const mapMove = (opponent: string, result: string): string => {
  // pretty gross but didn't want to refactor the rest

  switch (opponent) {
    case 'A':
      switch (result) {
        case 'X':
          return opponent + ' Z';
        case 'Y':
          return opponent + ' X';
        case 'Z':
          return opponent + ' Y';
      }
      break;
    case 'B':
      switch (result) {
        case 'X':
          return opponent + ' X';
        case 'Y':
          return opponent + ' Y';
        case 'Z':
          return opponent + ' Z';
      }
      break;
    case 'C':
      switch (result) {
        case 'X':
          return opponent + ' Y';
        case 'Y':
          return opponent + ' Z';
        case 'Z':
          return opponent + ' X';
      }
      break;
  }

  throw Error('Invalid moves');
  return '';
};
