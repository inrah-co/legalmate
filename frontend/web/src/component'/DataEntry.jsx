import React, { useEffect, useState } from "react";
import { PiSubtitlesLight } from "react-icons/pi";
import "./DataEntry.css";
import js from "@eslint/js";
import { API_URL } from "../constants";

const DataEntry = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);

  async function submitData() {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/data/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const jsonData = await response.json();
      setLoading(false);
      console.log(jsonData);
      alert("Data submitted successfully");
      setFormData({ title: "", description: "", type: "" });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert(`Error submitting data
        message: ${error.message}
        Error: ${error}
        `);
    }
  }
  async function fetchData() {
    setLoading(true);
    const response = await fetch(`${API_URL}/data/types`);
    const jsonData = await response.json();
    setData(jsonData);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      className="dataentry"
      style={loading ? { opacity: 0.5 } : { opacity: 1 }}
    >
      <form action="" className="dataentry_form">
        <h1 className="dataentry_title">Submit Information</h1>

        <div className="dataentry_inputs">
          <div className="dataentry_box">
            <input
              type="text"
              placeholder="Enter a Title..."
              className="dataentry_input"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          <div className="dataentry_box">
            <textarea
              className="dataentry_input_textarea"
              placeholder="Enter a Description..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div className="dataentry_box">
            <select
              className="select"
              name=""
              id=""
              value={formData.type}
              onChange={(e) => {
                if (e.target.value !== "") {
                  setFormData({ ...formData, type: e.target.value });
                }
              }}
            >
              <option value="">Choose an option</option>
              {data &&
                data.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              {/* <option value="">Constitution</option>
              <option value="">Indian Union Law</option>
              <option value="">State Law</option> */}
            </select>
          </div>
          <button
            className="btn"
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              if (formData.title && formData.description && formData.type) {
                await submitData();
              } else {
                alert("Please fill all the fields");
              }
            }}
          >
            Submit
          </button>

          {/* <div className="toggle">
            <label for="toggleOptimized">Optimized Response</label>
            <div className="toggle_inp">
              <input type="checkbox" id="toggleOptimized" value="true" />
              <span id="toggleStatus" style={{ color: "white" }}>
                Off
              </span>
            </div>
          </div> */}
        </div>
      </form>
      {loading && <div className="loading">Loading ....</div>}
    </div>
  );
};

export default DataEntry;
