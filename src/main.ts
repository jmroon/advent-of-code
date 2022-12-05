import * as fs from "fs/promises";

const script = await import(`./${process.argv[2]}.js`);
const data = (await fs.readFile(`./data/${process.argv[2]}.txt`))
  .toString()
  .replaceAll("\r\n", "\n");

if (data.length === 0) console.error(`No data found for ${process.argv[2]}`);

console.log(`Part 1: ${script.part1(data)}`);
console.log(`Part 2: ${script.part2(data)}`);

export {};
