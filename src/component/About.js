import React,{useState} from 'react'

function About () {
const [myStyle, setMyStyle] = useState({
  color:"black",
  background:"white",
  border:"2px solid white"
});
const [btntext, setBtnText] = useState("Enable Dark mode")

const toggleStyle = () =>{
  if(myStyle.color === 'black'){
setMyStyle({
  color:"white",
  backgroundColor:"black",
  border:"2px solid white"

})
setBtnText("Enable Light Mode")
  }
  else{
    setMyStyle({
      color:"black",
      backgroundColor:"white",
      border:"2px solid white"
    })


  }
}
  return (
    <div className="container" style={myStyle}>
      <h1 className='my-3'>Avout Us</h1>
<div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button"  data-bs-toggle="collapse"
       data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        Textutilis gives your text quickly and efficiency. Be itword count, character count 
        
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character count & word count statistics for 
        a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text word/ 
        character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any web browsers such as chrome, Firebox, Internet Explorer, Safari, Opera.
        It suits to count characters in facebook, blog, books, excel document, pdf dcument, easys, etc.
      </div>
    </div>
  </div>
</div>
 <div className="container my-3">
  <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>


</div> 

    </div>
  )
}

export default About 