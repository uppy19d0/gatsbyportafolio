import React from "react";
import "../utils/fontawesome";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faEye
  } from '@fortawesome/free-solid-svg-icons'

export default (props)=>(
<li className="flex items-center">
    <div className="w-10/12 overflow-x-hidden">
        <h4 className="text-pink-600 font-bold truncate">{props.repo.name}</h4>
        <p className="text-sm text-gray-800 overflow-hidden" style={{height:"1.5em"}}>{props.repo.description}</p>
    </div>

    <div className="flex-1 text-right">
    <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faEye} size="1x" to={props.repo.html_url}/>
    Ver
    </a>
    
    </div>
</li>
);