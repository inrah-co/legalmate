// import './App.css'
// import gptLogo from './assets/chatgpt.svg'
// import addBtn from './assets/add-30.png'
// import msgIcon from './assets/message.svg'
// import home from './assets/home.svg'
// import saved from './assets/bookmark.svg'
// // import rocket from './assets/rocket.svg'
// import sendBtn from './assets/send.svg'
// import userIcon from './assets/user-icon.png'
// import gptImgLogo from './assets/chatgptLogo.svg'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import Legalmate from './component\'/Legalmate'
// import { sendMsgToOpenAI } from './openai'
// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Legalmate from "./component'/Legalmate";
import Database from "./component'/Database";
import DataEntry from "./component'/DataEntry";
import DatabaseDetail from "./component'/DatabaseDetail";

function App() {
  //  const [toggle,setToggle] = useState(true)

  //   async function sample (){
  //     const data = await axios.get("http://localhost:3000/api/options")
  //     setToggle(data.data[0].optimizedResponse)
  //   //  console.log(data)
  //   }

  //   useEffect(async () =>{
  //     sample()
  //   },[setToggle])

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Legalmate />} />
            <Route path="/database" element={<Database />} />
            <Route path="/dataentry" element={<DataEntry />} />
            <Route path="/detail/:id" element={<DatabaseDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

// onChange={ async ()=> {await fetch("http://localhost:3000/api/options/", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ optimizedResponse : !toggle }),
//           }).then(
//             ()=>{
//               setToggle(!toggle)
//             }
//           );}} type="checkbox" value={toggle}
