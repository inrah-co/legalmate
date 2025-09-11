import React from 'react'
import '../App.css'
import gptLogo from '../assets/chatgpt.svg'
import addBtn from '../assets/add-30.png'
import msgIcon from '../assets/message.svg'
import home from '../assets/home.svg'
import saved from '../assets/bookmark.svg'
// import rocket from './assets/rocket.svg'
import sendBtn from '../assets/send.svg'
import userIcon from '../assets/user-icon.png'
import gptImgLogo from '../assets/chatgptLogo.svg'
import { Link } from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa6";

const Legalmate = () => {
  return (
    <>
    <div className='sidebar'>
    <div className="upperside">
      <div className="upperSideTop">
        <img className='logo' src={gptLogo} alt="" /> <span className='brand'>Legal Mate</span>
      </div>
      <button className='midBtn'><img src={addBtn} alt="" className="addBtn" />New Chat</button>
      <div className="upperSideBottom">
        <button className='query'>   <img src={msgIcon} alt="Query" />What is Programing ? </button>
        <button className='query'> <img src={msgIcon} alt="Query" />How To Api ?</button>
      </div>

    </div>
    <div className="lowerside">
    <Link style={{ textDecoration: "none",  color:"white"}} to={"/database"}> 
      <div className="listItems">
       <img src={home} alt="" className='listItemImg' />Database
      </div>
      </Link>

      <Link style={{ textDecoration: "none",  color:"white"}} to={"/dataentry"} > 
      <div className="listItems">
        <img src={saved} alt="" className='listItemImg' />Data Entry
      </div>
      </Link>
      
      <div className="listItems">
        <input type='checkbox' /> Optimise Response
      </div>
    </div>
  </div>

  <div className='main'>
    <div className='title_container'>
      <div>
      <img className='title_logo' src={gptLogo} alt="" /> <span className='title'>Legal Mate</span>
      </div>
      <div className='menu'>
      <FaChevronRight />
      </div>
    </div>
    

    <div className='chats'>


      <div className="chat">
        <img className='chatImg' src={userIcon} alt="" /> <p className="txt voice">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus tempore repellendus nobis perferendis commodi distinctio a, sapiente aut consequuntur!</p>
      </div>
      <div className="chat bot">
        <img className='chatImg' src={gptImgLogo} alt="" /> <p className="txt voice">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod blanditiis, illo molestiae beatae cupiditate molestias quo quisquam alias odio eius quis ipsam recusandae? Quod a nesciunt fugiat error nemo, pariatur cupiditate! Adipisci laudantium saepe iure vitae nihil! Dolore orem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod blanditiis, illo molestiae beatae cupiditate molestias quo quisquam alias odio eius quis ipsam recusandae? Quod a nesciunt fugiat error nemo, pariatur cupiditate! Adipisci laudantium saepe iure vitae nihil! Dolore orem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod blanditiis, illo molestiae beatae cupiditate molestias quo quisquam alias odio eius quis ipsam recusandae? Quod a nesciunt fugiat error nemo, pariatur cupiditate! Adipisci laudantium saepe iure vitae nihil! Dolore orem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod blanditiis, illo molestiae beatae cupiditate molestias quo quisquam alias odio eius quis ipsam recusandae? Quod a nesciunt fugiat error nemo, pariatur cupiditate! Adipisci laudantium saepe iure vitae nihil! Dolore  orem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod blanditiis, illo molestiae beatae cupiditate molestias quo quisquam alias odio eius quis ipsam recusandae? Quod a nesciunt fugiat error nemo, pariatur cupiditate! Adipisci laudantium saepe iure vitae nihil! Dolore</p>
      </div>
    </div>

    <div className='chatFooter'>

      <div className="inp">
        <input type="text" placeholder='Send a message...' />  <button className='send'><img src={sendBtn} alt="Send" /></button>
      </div>
      <p>LegatMate Official partner</p>

    </div>
  </div>
  </>
  )
}

export default Legalmate