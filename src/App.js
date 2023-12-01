
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import React, { useState } from 'react'
import Contact from './Components/Contact';
import { Route, Routes } from 'react-router-dom';



function App() {
    
    const [state, setState] = useState({
      modeEnabled: "#1F2633",
      textModeEnabled: 'white',
      modeTextNav: 'Dark',
      translateXValue: '0px',
      labelBackgroundColor: '#c5d1dc84',
      btnBgColor: 'green',
      textColor: "black",
      contactPgUnderline: "none",
    })

  const enableDarkModeOnClick = () => {

    if (state.modeEnabled === "#1F2633") {
      document.body.style.backgroundColor = "#1F2633"
      setState({ modeEnabled: "rgb(185, 192, 198)", textModeEnabled: "black", modeTextNav: "Light", translateXValue: "+70%", btnBgColor: "rgb(185, 192, 198)", textColor: "white", labelBackgroundColor: "#00D1FF" })
    }
    else {
      document.body.style.backgroundColor = "white"
      setState({ modeEnabled: "#1F2633", textModeEnabled: "white", modeTextNav: "Dark", translateXValue: "0px", btnBgColor: "green", textColor: "black", labelBackgroundColor: "#c5d1dc84" })
    }

  }


  return (
    <>
      <Navbar enableDarkModeOnClick={enableDarkModeOnClick} darkLightModeNav={{ backgroundColor: state.modeEnabled }} darkLightModeTextNav={state.modeTextNav} darkLightModeText={{ color: state.textModeEnabled }} transitionCircle={{ transform: `translateX( ${state.translateXValue} )` }} backgroundColorDarkMode={{ backgroundColor: state.labelBackgroundColor }} currentPgIsContact={{textDecoration : state.contactPgUnderline}} />
      <Routes>
        <Route path="/Text-Analyzer" element={<TextArea backgroundColorButton={{ backgroundColor: state.btnBgColor, color: state.textModeEnabled }} textAreaColor={{ color: state.textColor }} />}>
        </Route>
        <Route path="/contact" element={<Contact textAreaColor={{ color: state.textColor }} />}>
        </Route>
      </Routes>
    </>
  );
  
}


export default App;
