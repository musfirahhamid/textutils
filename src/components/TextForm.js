import React, {useState} from "react";
import PropTypes from 'prop-types'

export default function TextForm(props) {
  //Sentence Case
    const handleSentenceClick=()=>{
      let sentence=text;
      let newText=sentence.charAt().toUpperCase()+ sentence.slice(1);
      setText(newText);
      props.showAlert("Converted SUccessfully:","success");
    }
  //UpperCase Function
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase:","success");
    }
    //LowerCase Function
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase:","success");
    }
    //Capitaliaze Function
    const handleCapitalClick=()=>{
      let capital=text;
      let arr=capital.split(" ");
      for(let i=0; i<arr.length;i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      const newText = arr.join(" ");
      setText(newText);
      props.showAlert("Converted to Capitalized:","success");
      console.log(newText)
    }
    //Copy Function
    const handleCopyClick=()=>{
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard:","success");
    }
    //Remove Extra Spaces
    const handleExtraClick=()=>{
      let newText=text.split(/[  ]+/);
      setText(newText.join(" "));
      props.showAlert("Spaces Removed Successfully:","success");
    }
    //Clear Function
    const handleClearClick=()=>{
      let newText='';
      setText(newText);
      props.showAlert("Cleared All:","success");
    }
    
    const handleOnChange=(event)=>{
        console.log("On chnage");
        setText(event.target.value);
    }


    const [text,setText]=useState("");
    // setText("new text");
  return (
    <>
    <div className="my-3 container">
    <button className="btn btn-info mx-2 my-4" onClick={handleSentenceClick}>Sentence case</button>
        <button className="btn btn-info mx-2 my-4" onClick={handleUpClick}>UPPERCASE </button>
        <button className="btn btn-info mx-2 my-4" onClick={handleLowClick}>lowercase</button>
        <button className="btn btn-info mx-2 my-4" onClick={handleCapitalClick}>Capitalize</button>
        <button className="btn btn-info mx-2 my-4" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-info mx-2 my-4" onClick={handleExtraClick}>Remove Extra Spaces</button>
        
        <button className="btn btn-danger mx-2 my-4" onClick={handleClearClick}>Clear All</button>
    <h1
     className="mb-3 container">{props.heading}</h1>
      
        <textarea className="form-control" value={text}  id="myBox" rows="10" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'#ced4da':'#ced4da',
      color:props.mode==='light'?'#212529':'#212529'}}></textarea>
      </div>
      <div className="mb-3 container">
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text to preview:"}</p>
        <h5>Text Summry:</h5>
        <p>{text.split(" ").length-1} Words {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
      </div> 
    </>
  );
}

TextForm.prototype={
    heading:PropTypes.string
}
TextForm.defaultProps={
    heading:"Text to analyze"
}