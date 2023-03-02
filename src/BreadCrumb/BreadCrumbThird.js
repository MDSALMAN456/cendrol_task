import React from 'react'

const BreadCrumbThird = ({value}) => {
  return (
    <div>
        <div>
        <button onClick={()=>value("crumb3")}>Third Comp</button>
    </div>
    </div>
  )
}

export default BreadCrumbThird