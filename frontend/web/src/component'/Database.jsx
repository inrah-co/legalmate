import React, { useEffect, useState } from "react";
import "./Database.css";

import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants";

const Database = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(`${API_URL}/data`);
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="database">
      <div className="database_container">
        <h1>Legal Mate Data Base</h1>
        <p>
          Welcome to the Legal Mate Data Base. Here you can find a collection of
          legal documents and resources.
        </p>
      </div>

      {/* <div className="database_inputContainer">
        <FaSearch size={20} color="gray" className="   search" />
        <input type="text" placeholder="Search..." />
      </div>

      <hr />

      <div className="list">
        <ul>
          <li>Top pick</li>
        </ul>
        <ul>
          <li>Writting</li>
        </ul>
        <ul>
          <li>Productivity</li>
        </ul>
      </div> */}

      <div>
        <div className="card_container">
          {data.map((item) =>
            cardComponent({
              id: item._id,
              title: item.title,
              description: item.description,
              type: item.type,
            })
          )}
        </div>
      </div>
    </div>
  );

  function cardComponent({ id, title, description, type }) {
    return (
      <Link
        to={`/detail/${id}`}
        style={{ textDecoration: "none", color: "white" }}
        state={{ id, title, description, type }}
        key={id}
      >
        <div className="card">
          <div className="card_content">
            <h2>{title}</h2>
            <small>{type}</small>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    );
  }
};

export default Database;
