export function part1(input: string) {
  const firstStrength = 20;
  const strengthInterval = 40;
  const lastStrength = 220;

  const state = generateState(input);

  // sum up the signal strength for the given range
  let totalStrength = 0;
  for (let i = firstStrength; i <= lastStrength; i += strengthInterval) {
    const signalStrength = state[i - 1]?.register * i;
    if (!signalStrength) {
      throw new Error(`No strength at cycle ${i}`);
    }
    totalStrength += signalStrength;
  }

  return totalStrength;
}

export function part2(input: string) {
  const state = generateState(input);

  const output = state.reduce((output, state, cycle) => {
    if (Math.abs(state.register - (cycle % 40)) <= 1) {
      return (output += '#');
    } else {
      return (output += '.');
    }
  }, '');

  return output.match(/.{40}/g)?.join('\n');
}

function generateState(input: string): State[] {
  // state is a map of cycle to program state
  let state: State[] = [{ register: 1 }];

  const instructions: Instruction[] = input.split('\n').map((line) => {
    const [op, arg] = line.split(' ');
    if (op !== 'noop' && op !== 'addx') {
      throw new Error(`Unknown instruction: ${op}`);
    }
    return { op, arg: parseInt(arg) };
  });

  // create an array of functions that will be executed in order
  const cycleFuncs = instructions.reduce((funcs, instruction) => {
    if (instruction.op === 'noop') {
      funcs.push((state) => state);
    } else if (instruction.op === 'addx') {
      funcs.push((state) => state);
      funcs.push((state) => ({
        ...state,
        register: state.register + instruction.arg,
      }));
    } else {
      throw new Error(`Unknown instruction: ${instruction.op}`);
    }
    return funcs;
  }, [] as ((state: Readonly<State>) => State)[]);

  // run each cycle and store its state
  cycleFuncs.forEach((cycleFunc, cycle) => {
    state = [...state, cycleFunc(state[cycle])];
  });

  return state;
}

interface Instruction {
  op: 'noop' | 'addx';
  arg: number;
}

interface State {
  register: number;
}
