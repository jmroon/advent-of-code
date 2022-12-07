export function part1(input: string) {
  const root = buildFileSystem(input.split('\n'));
  return root.flatDirs
    .filter((dir) => dir.size < 100000)
    .reduce((totalSize, dir) => (totalSize += dir.size), 0);
}

export function part2(input: string) {
  const root = buildFileSystem(input.split('\n'));

  const spaceToFree = 30000000 - 70000000 + root.size;

  return root.flatDirs
    .filter((dir) => dir.size > spaceToFree)
    .map((dir) => dir.size)
    .sort()[0];
}

function buildFileSystem(cmds: string[]): Directory {
  const root = new Directory('/');

  let currentDir = root;

  cmds.forEach((cmd) => {
    if (cmd.startsWith('$ cd /')) {
      currentDir = root;
    } else if (cmd.startsWith('$ cd ')) {
      currentDir = currentDir.cd(cmd.slice(5));
    } else if (cmd.startsWith('$ ls ')) {
      return;
    } else if (cmd.startsWith('dir ')) {
      currentDir.addDir(cmd.slice(4));
    } else if (cmd[0].match(/\d/)) {
      const [size, name] = cmd.split(' ');
      currentDir.addFile(name, parseInt(size));
    }
  });

  return root;
}

class Directory {
  children: Directory[] = [];
  files: { name: string; size: number }[] = [];

  constructor(public name: string, public parent?: Directory) {}

  addDir(name: string): void {
    if (!this.children.some((dir) => dir.name === name)) {
      this.children.push(new Directory(name, this));
    }
  }

  addFile(name: string, size: number): void {
    if (!this.files.some((file) => file.name === name)) {
      this.files.push({ name, size });
    }
  }

  cd(name: string): Directory {
    return name === '..'
      ? this.parent!
      : this.children.find((dir) => dir.name === name)!;
  }

  get size(): number {
    return (
      this.files.reduce((size, file) => size + file.size, 0) +
      this.children.reduce((dirSizes, dir) => dirSizes + dir.size, 0)
    );
  }

  get flatDirs(): Directory[] {
    return [
      this,
      ...this.children.reduce<Directory[]>(
        (dirs, dir) => [...dirs, ...dir.flatDirs],
        []
      ),
    ];
  }
}
