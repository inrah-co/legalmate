import React, { use, useEffect, useState } from "react";
import "../App.css";
import gptLogo from "../assets/chatgpt.svg";
import addBtn from "../assets/add-30.png";
import msgIcon from "../assets/message.svg";
import home from "../assets/home.svg";
import saved from "../assets/bookmark.svg";
// import rocket from './assets/rocket.svg'
import sendBtn from "../assets/send.svg";
import userIcon from "../assets/user-icon.png";
import gptImgLogo from "../assets/chatgptLogo.svg";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import legalmateicon from "../assets/legalmate_icon2.png";
import { FaDatabase } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { API_URL } from "../constants";

const Legalmate = () => {
  const [checked, setChecked] = useState(true);
  async function getOptimizeStatus() {
    try {
      const response = await fetch(`${API_URL}/options`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      setChecked(data[0].optimizedResponse);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function handleCheckboxChange() {
    try {
      console.log(checked);
      const data = await fetch(`${API_URL}/options/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ optimizedResponse: !checked }),
      });
      console.log(checked);

      const response = await data.json();
      console.log(response);
      setChecked(!checked);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getOptimizeStatus();
  }, []);

  const [state, setState] = useState([
    // {
    //   req: "",
    //   res: "",
    // },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  async function handleSendMessage() {
    if (thinking) {
      alert("Please wait for the current response to finish.");
      return;
    }
    if (input.trim() === "") return;
    const userMessage = input;
    setInput("");
    setState((prevState) => [
      ...prevState,
      { req: userMessage, res: "🤔 THINKING..." },
    ]);
    try {
      setThinking(true);
      const response = await fetch(`${API_URL}/query/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: userMessage }),
      });
      console.log(response);
      if (response.status !== 200) {
        throw new Error("Non-200 response");
      }
      // if (response.status !== 200) {
      //   setState((prevState) => {
      //     const newState = [...prevState];
      //     newState[newState.length - 1].res =
      //       "Sorry, there was an error processing your request.";
      //     return newState;
      //   });
      //   return;
      // }

      const data = await response.json();

      setState((prevState) => {
        const newState = [...prevState];
        newState[newState.length - 1].res = data.response;
        return newState;
      });
      setThinking(false);
    } catch (error) {
      console.error("Error:", error);
      setState((prevState) => {
        const newState = [...prevState];
        newState[newState.length - 1].res =
          "Sorry, there was an error processing your request.";
        return newState;
      });
      setThinking(false);
    }
  }

  return (
    <>
      <div className="sidebar">
        <div className="upperside">
          <div className="upperSideTop">
            <img className="logo" src={legalmateicon} alt="" />{" "}
            <span className="brand">Legal Mate</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              {" "}
              <img src={msgIcon} alt="Query" />
              What is Programing ?{" "}
            </button>
            <button className="query">
              {" "}
              <img src={msgIcon} alt="Query" />
              How To Api ?
            </button>
          </div>
        </div>
        <div className="lowerside">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/database"}
          >
            <div className="listItems">
              <FaDatabase size={25} style={{ marginRight: "10px" }} />{" "}
              <p>Data Base</p>
            </div>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/dataentry"}
          >
            <div className="listItems">
              <FaWpforms size={25} style={{ marginRight: "10px" }} />{" "}
              <p>Data Entry</p>
            </div>
          </Link>

          <div className="listItems">
            <label htmlFor="optimize-checkbox">Optimise Response</label>
            <input
              type="checkbox"
              id="optimize-checkbox"
              checked={checked}
              onChange={async () => await handleCheckboxChange()}
            />
          </div>
        </div>
      </div>

      <div className="main">
        <div className="title_container">
          <div>
            <img className="title_logo" src={gptLogo} alt="" />{" "}
            <span className="title">Legal Mate</span>
          </div>
          <div className="menu">
            <FaChevronRight />
          </div>
        </div>

        <div className="chats">
          {state.length === 0 ? (
            <></>
          ) : (
            <>
              {state.map((item, index) => (
                <div key={index}>
                  <div className="chat">
                    <img className="chatImg" src={userIcon} alt="" />{" "}
                    <p className="txt voice">{item.req}</p>
                  </div>
                  <div className="chat bot">
                    <img className="chatImg" src={legalmateicon} alt="" />{" "}
                    <p className="txt voice">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {item.res}
                      </ReactMarkdown>
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  await handleSendMessage();
                }
              }}
            />{" "}
            <button
              className="send"
              onClick={async () => await handleSendMessage()}
            >
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>LegatMate Official partner</p>
        </div>
      </div>
    </>
  );
};

export default Legalmate;
