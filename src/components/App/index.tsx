import React, { useState, useEffect } from "react";
import "./index.css";
import FileTree from "../FileTree";
import FileContent from "../FileContent";
import fileFixtures from "../../fixtures/files.json";
import File from "../../entities/file";
import TreeViewDataSource from "../../entities/treeViewDataSource";
type Props = {};

const parsedFiles: File[] = File.generateFixtures(fileFixtures);

const App: React.FC<Props> = (_) => {
  const [selectedFile, updateSelectedFile] = useState(new File("", "", "", ""));
  const [treeViewDataSource, updateTreeViewDataSource] = useState(new TreeViewDataSource());


  const handleTreeViewDataSourceUpdate = (dataSource: TreeViewDataSource) => {
    updateTreeViewDataSource(dataSource);
  };

  const handleFileSelected = (key: string, value: boolean) => {
    console.log(key);
    console.log(value);
    const file: File = value ? parsedFiles.filter(file => file.getPath() === key)[0] : new File("", "", "", "");
    updateSelectedFile(file);
  };

  useEffect(() => {
    console.log("The file fixtures are here!", fileFixtures);
    const dataSource: TreeViewDataSource = new TreeViewDataSource();
    parsedFiles.forEach(file => {
      dataSource.addFileToTreeDataSource(file);
    });
    handleTreeViewDataSourceUpdate(dataSource);
  }, []);

  return (
    <div className="App">
      <header className="App-header">ElementAI Frontend Challenge</header>
      <div className="App-content">
        <FileTree dataSource={treeViewDataSource} handleFileSelected={handleFileSelected} />
        <FileContent selectedFile={selectedFile} />
      </div>
    </div>
  );
};

export default App;
