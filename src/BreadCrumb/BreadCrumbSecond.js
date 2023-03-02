import React from 'react'

const BreadCrumbSecond = ({value}) => {
  return (
    <div>
        <div>
        <button onClick={()=>value("crumb2")}>Second Comp</button>
    </div>
    </div>
  )
}

export default BreadCrumbSecond