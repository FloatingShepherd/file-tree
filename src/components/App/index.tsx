import React, { useState, useEffect } from "react";
import "./index.css";
import FileTree from "../FileTree";
import FileContent from "../FileContent";
import fileFixtures from "../../fixtures/files.json";
import File from "../../entities/file";

type Props = {};

const App: React.FC<Props> = (_) => {
  const [selectedFile, updateSelectedFile] = useState(new File("","","",""));

  let files:File[]=[];
  useEffect(() => {
    console.log("The file fixtures are here!", fileFixtures);
    files = File.generateFixtures(fileFixtures);
  }, [fileFixtures]);

  return (
    <div className="App">
      <header className="App-header">ElementAI Frontend Challenge</header>
      <div className="App-content">
        <FileTree fileFixtures={files} updateSelectedFile={updateSelectedFile} />
        <FileContent selectedFile={selectedFile}/>
      </div>
    </div>
  );
};

export default App;
