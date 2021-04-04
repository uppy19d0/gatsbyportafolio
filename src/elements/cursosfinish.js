import React from "react";


export default (props) =>{
    const cursosFinish = props.element;
    return (
    <div className="shadown p-8 bg-white shadow mr-4">
    <h4 className="font-bold truncate">{cursosFinish.title}</h4>
    <div className="text-center">
        <span className="inline-block bg-blue-200 text-blue-700 p-2 mt-2 radius">
        {cursosFinish.url}
        </span>
       
        </div>
    </div>
    )
}