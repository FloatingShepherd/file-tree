import React from "react";
import File from "../../entities/file";
import "./index.css";

type Props = {
  selectedFile: File
};

const FileContent: React.FC<Props> = ({ selectedFile }) => {
  return (
    <div className="FileContent">
      {selectedFile.getContent()}
    </div>
  );
};

export default FileContent;
