import React from "react";
import TreeViewNode from "../../entities/treeViewNode";
import "./index.css";

type Props = {
    node: TreeViewNode,
    handleFileSelected: (key: string, value: boolean) => void
};

let currentSelected: string;

const TreeItem: React.FC<Props> = ({ node, handleFileSelected }) => {
    // Passing path of selected/unselected file in order to find it later.
    // Passing checked/unchecked value at the same time.
    const changeHandler = (e:React.FormEvent<HTMLInputElement>) => {
		if (e.currentTarget.checked){
			handleFileSelected(node.getKey(), true);
			currentSelected = node.getKey();
		} else {
			handleFileSelected(node.getKey(), false);
			currentSelected = "";
		}
    };

    return (
        <div className="TreeItem">
            { !node.getValue() &&
			<header className="TreeItemTitle">{node.getName()}</header>
			}
			{node.getChildren().filter(c => c.getName()).map((child, index) => {
            	return <div className="TreeItemList">
						<TreeItem key={`${node.getName()}${index}`} node={child} handleFileSelected={handleFileSelected}></TreeItem>
				</div>}
            )}
			{ node.getValue() &&
            <div className="TreeValueList">
				<div key={`${node.getName()}${node.getValue()}`}>
					<label><input type="radio" name="file" onChange={changeHandler} />{node.getValue()}</label>
				</div>
            </div>
			}
        </div>
    );
};

export default TreeItem;
