import React from 'react'
import {Link} from 'react-router-dom'

function HomeNewsCompItem(props){
  return(
    <>
      <Link style={{textDecoration: 'none'}} to={props.to} className="Home-news-item">
        <img className="Home-news-item-img" src={props.img} alt=""></img>
        <span  className="Home-news-item-text">{props.text}</span>
      </Link>
    </>
  )
}

export default HomeNewsCompItem