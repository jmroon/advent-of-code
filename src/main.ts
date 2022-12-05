import * as fs from "fs/promises";

const script = await import(`./${process.argv[2]}.js`);
const data = await fs.readFile(`./data/${process.argv[2]}.txt`);
const lines = data.toString();

script.default(lines);

export {};
