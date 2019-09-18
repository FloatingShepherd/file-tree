import TreeViewNode from "./treeViewNode";
import File from "./file";


export default class TreeViewDataSource {
    private root: TreeViewNode;
    private DEFAULT_ROOT_NAME = "-";
    constructor() {
        this.root = new TreeViewNode(this.DEFAULT_ROOT_NAME, "", []);
    }

    getRoot(): TreeViewNode {
        return this.root;
    }

    addFileToTreeDataSource(file: File) {
        const paths = file.splitPathAndSetName();
        let currentNode = this.root;

        // Traverse the tree based on file path. 
        // Create nodes if such nodes do not exist.
        for (let i = 0; i < paths.length; i += 1) {
            const path = paths[i];
            const childNode: TreeViewNode | null = currentNode.findChild(path);
            if (childNode) {
                currentNode = childNode;
            } else {
                currentNode = currentNode.addChild(path, file.getPath(), []);
            }
        }

        // Add file to the last traveled node
        currentNode.setValue(file.getName());
    }
}
