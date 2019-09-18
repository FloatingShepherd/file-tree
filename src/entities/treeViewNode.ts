export default class TreeViewNode {
    private value: any;

    constructor(
        private name: string,
        private key: string,
        private children: TreeViewNode[]
    ) { }

    getName() {
        return this.name;
    }
    getKey() {
        return this.key;
    }
    getChildren(): TreeViewNode[] {
        return this.children;
    }
    setValue(_value: any): any {
        this.value = _value;
    }
    getValue(): any {
        return this.value;
    }

    findChild(_name: string): TreeViewNode | null {
        const result = this.children.filter((n: TreeViewNode) => n.getName() === _name);
        return result && result.length ? result[0] : null;
    }

    addChild(_name: string, _key: string, _children: TreeViewNode[]): TreeViewNode {
        const child: TreeViewNode = new TreeViewNode(_name, _key, _children);
        this.children.push(child);
        return child;
    }
}
