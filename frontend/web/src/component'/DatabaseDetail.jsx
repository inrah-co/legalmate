import React from "react";
import { useLocation } from "react-router-dom";
import "./DatabaseDetail.css";

const DatabaseDetail = () => {
  const location = useLocation();
  const { id, title, description, type } = location.state || {};

  return (
    <div className="main_container">
      <div className="detail_container">
        {/* <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor
          tempora quasi quisquam explicabo molestiae exercitationem eligendi
          commodi dolore asperiores necessitatibus, velit officia, ullam
          architecto repellat veritatis praesentium alias blanditiis!
        </h1>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          quidem iusto dolor aut vero similique, exercitationem pariatur
          assumenda! Laborum accusamus necessitatibus quis qui aut doloribus
          facere corrupti quos a ex.
        </small>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          voluptatibus!
        </p> */}
        <h1>{title}</h1>
        <small>{type}</small>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DatabaseDetail;
