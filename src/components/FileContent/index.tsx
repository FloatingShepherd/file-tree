import React from "react";
import File from "../../entities/file";
import "./index.css";

type Props = {
  selectedFile:File
};

const FileContent: React.FC<Props> = ({selectedFile}) => {
  return (
    <div className="FileContent">
      Implement your FileContent component here. This component should present
      the content of the file that was selected from the file tree.
    </div>
  );
};

export default FileContent;
