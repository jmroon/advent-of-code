export function part1(input: string) {
  const [, flatDirs] = buildFileSystem(input.split('\n'));

  return [...flatDirs.values()]
    .filter((dir) => dir.size < 100000)
    .reduce((totalSize, dir) => (totalSize += dir.size), 0);
}

export function part2(input: string) {
  const [fileSystem, flatDirs] = buildFileSystem(input.split('\n'));

  const spaceToFree = 30000000 - 70000000 + fileSystem.size;

  return [...flatDirs.values()]
    .filter((dir) => dir.size > spaceToFree)
    .map((dir) => dir.size)
    .sort()[0];
}

function buildFileSystem(
  cmds: string[]
): [fileSystem: Directory, flatDirs: Set<Directory>] {
  const fileSystem = new Directory('/');

  const flatDirs = new Set<Directory>();

  let currentDir = fileSystem;

  for (let i = 0; i < cmds.length; i++) {
    const cmd = cmds[i];
    if (cmd.startsWith('$ cd /')) {
      currentDir = fileSystem;
    } else if (cmd.startsWith('$ cd ')) {
      currentDir = currentDir.cd(cmd.slice(5));
    } else if (cmd.startsWith('$ ls ')) {
      break;
    } else if (cmd.startsWith('dir ')) {
      const name = cmd.slice(4);
      const newDir = currentDir.addDir(name);
      if (newDir) {
        flatDirs.add(currentDir.cd(name));
      }
    } else if (cmd[0].match(/\d/)) {
      const [size, name] = cmd.split(' ');
      currentDir.addFile(name, parseInt(size));
    }
  }
  return [fileSystem, flatDirs];
}

class Directory {
  children: Directory[] = [];
  files: File[] = [];

  constructor(public name: string, public parent?: Directory) {}

  addDir(name: string): Directory | undefined {
    if (this.children.find((dir) => dir.name === name)) {
      return;
    }
    const dir = new Directory(name, this);
    this.children.push(dir);
    return dir;
  }

  addFile(name: string, size: number): void {
    if (this.files.some((file) => file.name === name)) {
      return;
    }
    this.files.push(new File(name, size));
  }

  get size(): number {
    return (
      this.files.reduce((size, file) => size + file.size, 0) +
      this.children.reduce((dirSizes, dir) => dirSizes + dir.size, 0)
    );
  }

  cd(name: string): Directory {
    if (name === '..') {
      return this.parent!;
    }
    return this.children.find((dir) => dir.name === name)!;
  }
}

class File {
  constructor(public name: string, public size: number) {}
}
