
import React,{useState} from "react";
import Navbar from "./component/Navbar.js";
 import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
 import TextForm from "./component/TextForm.js";
import About from "./component/About.js"
import Alert from "./component/Alert.js";
function App() {
   const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
       showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    
      <>
      
    {/* <Navbar title="TextUtils" aboutText="About" /> */}
   {/* <NavBar /> */}
   {/* <Navbar title="TextUtils"/> */}
    <Router>
  
     <Navbar  title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>  
    <div className="container my-3">
    <Switch>
              <Route exact path="/about" >
              <About />
              </Route>
          <Route exact path="/" >
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}  />
          </Route>
          </Switch> 
          
    </div> 
     </Router> 
      </>

      
  

  );
}

export default App;
