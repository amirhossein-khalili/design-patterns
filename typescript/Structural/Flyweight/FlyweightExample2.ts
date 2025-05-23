class Tree {
  constructor(public icon: string) {}
}

class TreeFactory {
  private static treeList: Record<string, Tree> = {};

  static getTree(icon: string) {
    if (!this.treeList[icon]) {
      this.treeList[icon] = new Tree(icon);
    }
    return this.treeList[icon];
  }
}

class TreeLocation {
  private x: number;
  private y: number;
  private tree: Tree;

  constructor(x: number, y: number, tree: Tree) {
    this.x = x;
    this.y = y;
    this.tree = tree;
  }

  draw() {
    console.log(`i am drawing ${JSON.stringify(this.tree)} on location x=${this.x} , y=${this.y}`);
  }
}

const tree1 = new TreeLocation(10, 20, TreeFactory.getTree("pine"));
const tree2 = new TreeLocation(15, 25, TreeFactory.getTree("maple"));
const tree3 = new TreeLocation(20, 30, TreeFactory.getTree("pine"));

tree1.draw();
tree2.draw();
tree3.draw();
