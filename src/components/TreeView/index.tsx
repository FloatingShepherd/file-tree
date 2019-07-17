import React from "react";
import TreeItem from "../TreeItem/index"
import TreeViewNode from "../../entities/treeViewNode";
import "./index.css";
import TreeViewDataSource from "../../entities/treeViewDataSource";

type Props = {
  dataSource: TreeViewDataSource,
  handleFileSelected: (key: string, value: boolean) => void
};

const TreeView: React.FC<Props> = ({ dataSource, handleFileSelected }) => {
  const root: TreeViewNode = dataSource.getRoot();
  return (
    <div className="TreeView">
      <TreeItem key={root.getName()} node={root} handleFileSelected={handleFileSelected}></TreeItem>
    </div>
  );
};

export default TreeView;
