export const part1 = (input: string) => getMarkerPosition(input, 4);

export const part2 = (input: string) => getMarkerPosition(input, 14);

function getMarkerPosition(input: string, markerLength: number) {
  for (let i = 0; i < input.length - markerLength; i++) {
    const set = new Set(input.slice(i, i + markerLength));
    if (set.size === markerLength) return i + markerLength;
  }
}
