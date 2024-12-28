import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextHighlighter from "./TextHighlighter";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, TextHighlighter],
    content: "<p>This is some random text.</p>",
  });

  const toggleHighlight = () => {
    if (editor) {
      editor.commands.toggleHighlight();
    }
  };

  return (
    <div>
      <button onClick={toggleHighlight}>Toggle Highlight</button>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
