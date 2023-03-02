import React from 'react'

const BreadCrumbFirst = ({value}) => {
  return (
    <div>
        <button onClick={()=>value("crumb1")}>First Comp</button>
    </div>
  )
}

export default BreadCrumbFirst