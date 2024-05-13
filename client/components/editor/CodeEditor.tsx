import React, { useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import classes from "./CodeEditor.module.css";
import { Dispatch, SetStateAction } from "react";
import { editor } from "monaco-editor";

interface IcodeEditor {
  showCode: boolean;
  setShowCode: Dispatch<SetStateAction<boolean>>;
  handleSubmitCode: (code: string) => Promise<void>;
}

const CodeEditor: React.FC<IcodeEditor> = ({
  showCode,
  setShowCode,
  handleSubmitCode,
}) => {
  const editorRef = useRef<editor.IStandaloneCodeEditor>();

  const onEditorDidMount = (editor: editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
  };

  const showValue = () => {
    if (editorRef.current?.getValue()) {
      handleSubmitCode(editorRef.current?.getValue());
    } else {
      console.log("error in show value");
    }
  };

  useEffect(() => {
    if (showCode) {
      showValue();
      setShowCode(!showCode);
    }
  }, [showCode, setShowCode]);
  return (
    <div className={classes.monacoeditor}>
      <Editor
        height="100%"
        defaultLanguage="cpp"
        defaultValue="// some comment"
        onMount={onEditorDidMount}
      />
    </div>
  );
};

export default CodeEditor;
