import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
// import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ListItemNodePlugin } from '@lexical/list';
import ExampleTheme from './themes/ExampleTheme';
import ToolbarPlugin from './plugins/ToolbarPlugin';
import TreeViewPlugin from './plugins/TreeViewPlugin';

import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { ListItemNode, ListNode } from "@lexical/list";

import ListToolbarPlugin from "./plugins/ListToolbar";
// import PlaygroundTheme from "./themes/listTheme";
import { useEffect, useRef, useState } from 'react';

function Placeholder() {
    return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
    namespace: 'React.js Demo',
    nodes: [ListItemNode, ListNode],
    // Handling of errors during update
    onError(error) {
        throw error;
    },
    // The editor theme
    theme: ExampleTheme,
};


function Test() {  

    const editorRef = useRef(null);
    const [htmlContent, setHtmlContent] = useState('');

    const handleGetHtml = () => {
        const content = editorRef.current?.outerHTML || '';
        setHtmlContent(content);
        console.log('Current HTML Content:', htmlContent);
      };

    function rteHandler(x) {
        
        console.log(x)
    }

    return (
        <div>

            <LexicalComposer initialConfig={editorConfig}>
                <div className="editor-container">
                    <ToolbarPlugin />
                    <ListToolbarPlugin />
                    <div className="editor-inner" ref={editorRef}>
                        <RichTextPlugin
                            contentEditable={<ContentEditable className="editor-input" />}
                            placeholder={<Placeholder />}
                            ErrorBoundary={LexicalErrorBoundary}
                            plugins={[ListItemNodePlugin]}
                            
                        />
                        {/* <HistoryPlugin /> */}
                    </div>
                        <ListPlugin />
                        <CheckListPlugin />
                        <AutoFocusPlugin />
                        <TreeViewPlugin onChange={rteHandler} />
                </div>
                <button onClick={handleGetHtml}>Get HTML</button>
            </LexicalComposer>
        </div>
    );
}

export default Test