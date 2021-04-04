import React from "react"

export default props => {
    let map = props.element
  const course = map
  return (
    <div className="shadown p-8 bg-white shadow mr-4 rounded">
      <h4 className="font-bold">
        <a href={course.url}>{course.title}</a>
      </h4>
      <div className="text-center">
        <span className="inline-block bg-blue-200 text-blue-700 p-2 mt-2 radius">
          {parseInt(course.progress)}%
        </span>
      </div>
    </div>
  )
}
