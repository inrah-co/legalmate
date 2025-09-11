import React from 'react'
import { PiSubtitlesLight } from "react-icons/pi";
import './DataEntry.css'


const DataEntry = () => {
  return (
    <div className='dataentry'>
      <form action="" className='dataentry_form'>
      <h1 className="dataentry_title">Submit Information</h1>

      <div className='dataentry_inputs'>

        <div className='dataentry_box'>
        
        <input type="text" placeholder='Enter a Title...' className='dataentry_input'/>
        
        </div>

        <div className="dataentry_box">
          <input type="text" className='dataentry_input' placeholder='Enter a Description...' />
          
        </div>
        <div className="dataentry_box">
          <select className='select' name="" id="">
            <option value="">Choose an option</option>
            <option value="">Constitution</option>
            <option value="">Indian Union Law</option>
            <option value="">State Law</option>
          </select>
        </div>
         <button className='btn' type='submit'>Submit</button>

         <div className="toggle">
         <label for="toggleOptimized">Optimized Response</label>
      <div className='toggle_inp'>
        <input type="checkbox" id="toggleOptimized" value="true" />
        <span id="toggleStatus" style={{color:"white"}}>Off</span>
      </div>
          
        </div>
      </div>








      </form>

      
      </div>

    

  )
}

export default DataEntry