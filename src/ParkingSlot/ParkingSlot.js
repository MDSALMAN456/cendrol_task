import React, { useState } from "react";

const ParkingSlot = () => {
  const data = [
    {
      name: "Parking-1",
      color: "green",
      id: 1,
      checked: true,
    },
    {
      name: "Parking-2",
      color: "green",
      id: 2,
      checked: true,
    },
    {
      name: "Parking-3",
      color: "green",
      id: 3,
      checked: true,
    },
    {
      name: "Parking-4",
      color: "green",
      id: 4,
      checked: true,
    },
    {
      name: "Parking-5",
      color: "green",
      id: 5,
      checked: true,
    },
    {
      name: "Parking-6",
      color: "green",
      id: 6,
      checked: true,
    },
    {
      name: "Parking-7",
      color: "green",
      id: 7,
      checked: true,
    },
    {
      name: "Parking-8",
      color: "green",
      id: 8,
      checked: true,
    },
  ];

  const [parkingCount, setParkingCount] = useState(8);
  const [parkingData, setParkingData] = useState(data);

  const HandleParking=(e)=>{
    if(e.checked){
        const res=parkingData.map((elem,i)=>{
            if(elem.id===e.id){
                elem.color="red";
                elem.checked=false
            }
           return elem
        })
        setParkingCount(parkingCount-1)
        setParkingData(res)
    }
    else{
        const res=parkingData.map((elem,i)=>{
            if(elem.id===e.id){
                elem.color="green";
                elem.checked=true
            }
           return elem
        })
        setParkingCount(parkingCount + 1)
        setParkingData(res)
    }

  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "30vh",
        }}
      >
        {parkingData.map((elem, i) => {
          return (
            <div
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: elem.color,
                marginRight: "10px",
                marginTop: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={elem.id}
              onClick={()=>HandleParking(elem)}
            >
              {elem.name}
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "50px", fontSize: "40px" }}>
        <span>Total Numbers of Parking Available : {parkingCount}</span>
      </div>
    </>
  );
};

export default ParkingSlot;
