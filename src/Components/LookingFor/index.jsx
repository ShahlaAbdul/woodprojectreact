import React from "react";
import "./style.css";
import Button from "../Button";

function LookingFor() {
  return (
      <div className="lookingForContainer">
          {" "}
      <div className="lookingFor">
        <div className="lookingForText">
          <h2>
            LOOKING FOR A <br />
            QUALITY AND AFFORDABLE FURNITURE?
          </h2>
          <p>
            inappropriate behavior is often laughed off as “boys will be boys,”
            women face higher conduct standards especially in the workplace.
          </p>
        </div>
        

        <div className="readdetailbutton">
          <Button title={<span>Read Detail</span>}></Button>
        </div>
      </div>
    </div>
  );
}

export default LookingFor;
