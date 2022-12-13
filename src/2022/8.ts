export function part1(input: string) {
  const map = getMap(input);

  const visibleTrees = new Set<`${number},${number}`>();

  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      const { left, right, up, down } = getDirections(map, { x, y });

      const tree = map[x][y];

      if (tree > Math.max(...left) || tree > Math.max(...right) || tree > Math.max(...up) || tree > Math.max(...down)) {
        visibleTrees.add(`${x},${y}`);
      }
    }
  }

  return [...visibleTrees].length;
}

export function part2(input: string) {
  const map = getMap(input);

  const scores = new Map<`${number},${number}`, number>();

  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      const { left, right, up, down } = getDirections(map, { x, y });

      const scoreLeft = getDirectionScore(left, map[x][y]);
      const scoreRight = getDirectionScore(right, map[x][y]);
      const scoreUp = getDirectionScore(up, map[x][y]);
      const scoreDown = getDirectionScore(down, map[x][y]);

      scores.set(`${x},${y}`, scoreLeft * scoreRight * scoreUp * scoreDown);
    }
  }

  const maxScore = Math.max(...scores.values());

  return [...scores.entries()].find(([, score]) => score === maxScore)![1];
}

function getMap(input: string) {
  return input
    .split('\n')
    .map((row) => row.split(''))
    .map((row) => row.map((height) => parseInt(height)));
}

function getDirections(map: number[][], { x, y }: { x: number; y: number }) {
  const left = map[x].slice(0, y).reverse();
  const right = map[x].slice(y + 1);
  const up = map
    .map((row) => row[y])
    .slice(0, x)
    .reverse();
  const down = map.map((row) => row[y]).slice(x + 1);

  return { left, right, up, down };
}

export function getDirectionScore(direction: number[], tree: number) {
  const score = direction.findIndex((height) => height >= tree);
  return score < 0 ? direction.length : Math.max(score + 1, 1);
}
