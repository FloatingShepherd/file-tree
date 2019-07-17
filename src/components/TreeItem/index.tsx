import React from "react";
import TreeViewNode from "../../entities/treeViewNode";
import "./index.css";

type Props = {
    node: TreeViewNode,
    handleFileSelected: (key: string, value: boolean) => void
};

let currentSelected: string;

const TreeItem: React.FC<Props> = ({ node, handleFileSelected }) => {
    return (
        <div className="TreeItem">
            <header className="TreeItemTitle">{node.getName()}</header>
            <div className="TreeItemList">
                {node.getChildren().map((child, index) => {
                    return <TreeItem key={`${node.getName()}${index}`} node={child} handleFileSelected={handleFileSelected}></TreeItem>;
                })}
            </div>
            <div className="TreeValueList">
                {((node.getValue() || []) as Array<string>).map((value, index) => {
                    return <div key={`${node.getName()}${value}${index}`}>
                        <label><input type="checkbox" onClick={() => {
                            if (currentSelected === node.getKey()) {
                                handleFileSelected(node.getKey(), false);
                                currentSelected = "";
                            } else {
                                handleFileSelected(node.getKey(), true);
                                currentSelected = node.getKey();
                            }
                        }} />{value}</label>
                    </div>;
                })}
            </div>
        </div>
    );
};

export default TreeItem;
