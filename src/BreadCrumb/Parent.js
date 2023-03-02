import React, { useState } from "react";
import BreadCrumbFirst from "./BreadCrumbFirst";
import BreadCrumbSecond from "./BreadCrumbSecond";
import BreadCrumbThird from "./BreadCrumbThird";

const Parent = () => {
  const [crumb1, setCrumb1] = useState(true);
  const [crumb2, setCrumb2] = useState(false);
  const [crumb3, setCrumb3] = useState(false);

  const OnClicking=(val)=>{
    if(val==="crumb1"){
        setCrumb1(false);
        setCrumb2(true);
        setCrumb3(false);

    }
    else if (val==="crumb2"){
        setCrumb1(false);
        setCrumb2(false);
        setCrumb3(true);
    }
    else {
        setCrumb1(true);
        setCrumb2(false);
        setCrumb3(false);
    }
  }

  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <div
          style={{
            width: "100%",
            height: "20vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul style={{ display: "flex", listStyle: "none" }}>
            <li 
              style={{ marginRight: "25px", fontSize: "30px" }}
              onClick={(e) => {
                setCrumb1(true);
                setCrumb2(false);
                setCrumb3(false);
              }}
            >
              Crumb1
            </li>
            <li style={{ marginRight: "25px", fontSize: "30px" }}
            onClick={() => {
                setCrumb1(false);
                setCrumb2(true);
                setCrumb3(false);
              }}>Crumb2</li>
            <li style={{ marginRight: "25px", fontSize: "30px" }}
            onClick={() => {
                setCrumb1(false);
                setCrumb2(false);
                setCrumb3(true);
              }}>Crumb3</li>
          </ul>
        </div>
        <div>
            {crumb1 && <BreadCrumbFirst value={OnClicking}/>}
            {crumb2 && <BreadCrumbSecond value={OnClicking}/>}
            {crumb3 && <BreadCrumbThird value={OnClicking}/>}
        </div>
      </div>
    </>
  );
};

export default Parent;
