import React, { useState } from 'react';
import "./TextArea.css";

export default function TextArea(props) {
    const [text, updateText] = useState("")
    let [numberOfCharacters, updateNumberOfCharacters] = useState(0)
    let [numberOfWords, updateNumberOfWords] = useState(0)
    let onChangeHandle = (e) => {
        updateText(e.target.value)
        updateNumberOfCharacters(e.target.value.split(" ").join("").length)
        updateNumberOfWords(e.target.value.split(" ").filter(words => words !== "").length)
    }
    let clickToUpperCase = () => {
        updateText(text.toUpperCase());
    }
    let clickToLowerCase = () => {
        updateText(text.toLowerCase());
    }
    let clickToClear=()=>{
        updateText("")
        updateNumberOfCharacters(0)
        updateNumberOfWords(0)
    }
    let clickToCopy=()=>{
        navigator.clipboard.writeText(text)
    }
    let clickToPaste=()=>{
        navigator.clipboard.readText().then((txt)=>{
        updateText(txt);
        updateNumberOfCharacters(txt.split(" ").join("").length)
        updateNumberOfWords(txt.split(" ").filter(words => words !== "").length)
    });
    }

    return (
        <>
            <div className="container">
                <strong>Playing with the text</strong>
                <label htmlFor="text-area"></label>
                <textarea id="text-area" placeholder="Enter your Text" value={text} onInput={onChangeHandle}></textarea>
                <div className="buttons">
                    <button onClick={clickToUpperCase} style={props.backgroundColorButton}>Click to change to UpperCase</button>
                    <button onClick={clickToLowerCase} style={props.backgroundColorButton}>Click to change to LowerCase</button>
                    <button onClick={clickToClear} style={props.backgroundColorButton}>Clear All</button>
                    <button onClick={clickToCopy} style={props.backgroundColorButton}>Copy</button>
                    <button onClick={clickToPaste} style={props.backgroundColorButton}>Paste</button>
                </div>
                <div className="numberOfWords">
                    <h3 style={props.textAreaColor}>The Number of Characters are <span>{numberOfCharacters}</span> and the Number of Words are <span>{numberOfWords}</span></h3>
                </div>
            </div>
        </>
    )
}
