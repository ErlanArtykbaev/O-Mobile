import React from 'react'

/*i didnt want to write a lot of things in main page
  thats why i created this component

  i though that i can easily create an object and use it
*/
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
            <img alt="" className="calendar-icon" src={props.calIcon} ></img>
            <p className="News-item-date">{props.date}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewsCompItem