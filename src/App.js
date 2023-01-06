import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

//exact path matches completely
      //path  matches partially
function App() {
const [mode,setMode]=useState('light');
const [btnText,setBtnText]=useState("Enable Dark Mode");
const [alert, setAlert] = useState(null)
//alert
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => { setAlert(null) }, 1500)
}

// const removeBodyClasses=()=>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-success')
// }
const toggleMode=()=>{
  //(cls)
  // removeBodyClasses();
  //document.body.classList.add('bg-'+cls);
  if(mode==='light'){
    setMode('dark');
    setBtnText("Enable Light Mode");
    document.body.style.backgroundColor='#212529';
    document.body.style.color='#fff';
    showAlert("Dark Mode Enabled","success");
    document.title="TEXTUTILS - DARK MODE"
  }
 else{
  setMode('light');
    setBtnText("Enable Light Mode");
    document.body.style.backgroundColor='#fff';
    document.body.style.color='#000';
    showAlert("Light Mode Enabled","success");
    document.title="TEXTUTILS - LIGHT MODE"
 }
}

  return (
    <>
     
    {/* <Router> */}
    <Navbar title="txtUtils"  mode={mode} toggleMode={toggleMode}  btnText={btnText} />
   <Alert alert={alert} />
    {/* <Routes>
     
          <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={} />
        </Routes> */}
    {/* </Router> */}
    <TextForm heading="Enter Text to Analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
    </>
    
  );
}

export default App;
