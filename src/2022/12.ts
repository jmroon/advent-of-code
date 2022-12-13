export function part1(input: string) {
  const map = input.split('\n').map((row) => row.split(''));

  const startY = map.findIndex((mapRow) => mapRow.includes('S'));
  const startX = map[startY].indexOf('S');

  return bfs(map, startX, startY);
}

export function part2(input: string) {
  const map = input.split('\n').map((row) => row.split(''));

  // these reducers are garbage, but I'm tired and it works
  // for loop would be more legible
  const startPositions = map.reduce<{ x: number; y: number }[]>((positions, row, y) => {
    const foundPositions = row
      .reduce<number[]>((xPositions, char, x) => (char === 'a' ? [...xPositions, x] : xPositions), [])
      .map((x) => ({ x, y }));
    return [...positions, ...foundPositions];
  }, []);

  console.log(startPositions);

  return startPositions
    .reduce<number[]>((steps, startPosition) => {
      let mapIteration = map.map((row) => [...row]);
      mapIteration[startPosition.y][startPosition.x] = 'S';
      return [...steps, bfs(mapIteration, startPosition.x, startPosition.y)];
    }, [])
    .sort()[0];
}

export function bfs(map: string[][], startX: number, startY: number): number {
  const queue = [{ x: startX, y: startY, steps: 0 }];

  while (queue.length > 0) {
    let { x, y, steps } = queue.shift()!;

    const current = map[y][x];

    if (current === 'E') {
      return steps;
    }

    const up = map[y - 1]?.[x];
    const down = map[y + 1]?.[x];
    const left = map[y]?.[x - 1];
    const right = map[y]?.[x + 1];

    map[y][x] = '-'; // mark as visited

    if (directionValid(current, up)) {
      queue.push({ x, y: y - 1, steps: steps + 1 });
    }

    if (directionValid(current, down)) {
      queue.push({ x, y: y + 1, steps: steps + 1 });
    }

    if (directionValid(current, left)) {
      queue.push({ x: x - 1, y, steps: steps + 1 });
    }

    if (directionValid(current, right)) {
      queue.push({ x: x + 1, y, steps: steps + 1 });
    }
  }

  return Infinity;
}

export function directionValid(current: string, destination: string | undefined) {
  if (destination === '-') return false; // already visited
  if (!destination) return false; // on the edge of the map
  if (current === 'S' && (destination === 'a' || destination === 'b')) return true; // start of the route
  if (current === 'z' && destination === 'E') return true; // end of the route
  if (current !== 'z' && destination === 'E') return false; // end of the route
  return destination.charCodeAt(0) - current.charCodeAt(0) <= 1;
}
