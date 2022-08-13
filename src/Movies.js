import React from "react";
import './style.css'
import {Link} from 'react-router-dom'
export default function Movies (props) {
    
   
    return (
        <div className="main--movies">
        <a href="/watch"><img className="main--img" src={props.img} ></img></a>
        <div className="main--main">
        <h3 className='main--hthree'>{props.name}</h3>
        <span className="main--span">{props.rated}</span>
        </div>
        </div>
    )
}