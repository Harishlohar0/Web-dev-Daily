import React, { useEffect, useState } from 'react'
import Window from './Window';
import "./note.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Note = () => {

    const [markdown, setmarkdown] = useState(null);
    useEffect(() => {
        fetch("/note.txt")
            .then(res => res.text())
            .then(text => setmarkdown(text))
    }, [])
    return (
        <Window name={"notes"}>
            <div className="note-window">
                {markdown ? <SyntaxHighlighter language='typescript' wrapLongLines={true} style={atomOneDark} customStyle={{
                    userSelect: "text",
                    cursor: "text",
                }}>
                    {markdown}</SyntaxHighlighter> : <p>Loading...</p>}

            </div>
        </Window>
    )
}

export default Note