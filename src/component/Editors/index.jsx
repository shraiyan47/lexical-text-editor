"use client"
import React, { useState } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import Editor from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

 function Texteditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newState) => {
    setEditorState(newState);
  };

  const rawContent = convertToRaw(editorState.getCurrentContent());
  // Access or process the raw content here, if needed
  // (e.g., save to database, display a preview)

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-editor-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'history'],
          inline: {
            inDropdown: false,
            options: ['bold', 'italic', 'underline', 'strikeThrough', 'monospace'],
          },
          blockType: {
            inDropdown: true,
            options: ['block-quote', 'unstyled'],
          },
          fontSize: {
            inDropdown: true,
          },
          history: {
            inDropdown: true,
          },
        }}
      />
    </div>
  );
}

export default Texteditor;