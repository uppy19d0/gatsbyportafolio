import { Link } from "gatsby"
import React from "react"

export default props => {
  const cursosFinish = props.element
  return (
    <div className="shadown p-8 bg-white shadow mr-4">
      <h4 className="font-bold truncate">{cursosFinish.title}</h4>
      <div className="text-center">
        <a
          href={cursosFinish.url}
          className="btn inline-block mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir
        </a>
      </div>
    </div>
  )
}
