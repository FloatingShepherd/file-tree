import React, {Dispatch, SetStateAction} from "react";
import File from "../../entities/file";

import "./index.css";

type Props = {
  fileFixtures:File[], 
  updateSelectedFile:Dispatch<SetStateAction<File>>
};

const FileTree: React.FC<Props> = ({fileFixtures, updateSelectedFile}) => {
  return (
    <div className="FileTree">Implement your FileTree component here.</div>
  );
};

export default FileTree;
