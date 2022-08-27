import React,{useState} from 'react'

function TextForm(props) {

    const handleUpClick = () =>{
        
        // console.log("Upercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to upperCase ", " success ");
    }
    const handleLowerClick = () =>{
       
        // console.log("Upercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to lowerCase", " success ");
    }
    const handleClearClick = () =>{    
        let newText = "";
        setText(newText)
        props.showAlert(" Clear text", " success ");
    }
    const handleonChnge = (event) =>{
        // console.log("on changed")
        setText(event.target.value);
    }
     const handlExtraSpace = () =>{
    let newTet = text.split(/[ ]+/);
    setText(newTet.join(" "))
    props.showAlert(" Extra space removed!", " success ");
}   
 const [text, setText] = useState("Enter text here2")
  return (
    <>
     <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleonChnge} style={{backgroundColor: props.mode==='dark'?'grey':'white',
color: props.mode==='dark'?'white':'#042743'}} id="exampleFormControlTextarea1" rows="8"></textarea> 
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary mx-1 my-1" onClick={handlExtraSpace}>Remove Extra Space</button>
</div>
<div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>  
<h1>Your text summary</h1>
<p>{text.split("").filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008 * text.split("").length} Minutes read</p>
<h2>preview</h2>
<p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
</div>
</>
)
}
export default TextForm
