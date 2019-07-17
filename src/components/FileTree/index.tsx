import React from "react";
import TreeViewDataSource from "../../entities/treeViewDataSource";

import TreeView from "../TreeView/index";

import "./index.css";

type Props = {
  dataSource: TreeViewDataSource,
  handleFileSelected: (key: string, value: boolean) => void
};

const FileTree: React.FC<Props> = ({ dataSource, handleFileSelected }) => {
  return (
    <div className="FileTree">
      <TreeView dataSource={dataSource} handleFileSelected={handleFileSelected}></TreeView>
    </div>
  );
};



export default FileTree;
