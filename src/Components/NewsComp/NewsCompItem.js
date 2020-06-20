import React from 'react'


function NewsCompItem(props){
  return(
    <div className="News-comp-item">
      
      <div className="News-item-box-img">
        <img className="News-item-img" alt="" src={props.img}></img>
      </div>

      <div className="News-item-box-text">
        <div className="News-item-div-title">
          <p className="News-item-title">{props.title}</p>
        </div>

        <div className="News-item-box-second">
          <div className="News-item-box-icon">
            <img className="News-item-icon" alt="" src={props.icon}></img>
          </div>
          <div className="News-item-box-date">
            <p className="News-item-date">{props.date}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewsCompItem