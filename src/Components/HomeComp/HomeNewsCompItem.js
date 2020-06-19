import React from 'react'

function HomeNewsCompItem(props){
  return(
    <>
      <div className="Home-news-item">
        <img className="Home-news-item-img" src={props.img} alt=""></img>
        <span className="Home-news-item-text">{props.text}</span>
      </div>
    </>
  )
}

export default HomeNewsCompItem