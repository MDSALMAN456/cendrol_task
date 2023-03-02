import React, { useState } from "react";

const ColorChangeBox = () => {
  const [inputVal, setInputVal] = useState({
    width: "",
    color: "",
  });
  return (
    <>
      <div>
        <input
          placeholder="Enter Width"
          onChange={(e) => setInputVal({ ...inputVal, width: e.target.value })}
        />
        <input
          placeholder="Enter Color"
          type={"color"}
          onChange={(e) => setInputVal({ ...inputVal, color: e.target.value })}
        />
      </div>
      <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center"}}>
      <div style={{height:"200px",width:`${inputVal.width}px`,backgroundColor:inputVal.color,marginTop:"50px"}}></div>
      </div>
    </>
  );
};

export default ColorChangeBox;
