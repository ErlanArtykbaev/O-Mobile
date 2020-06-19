import React from 'react'
import {NavLink} from 'react-router-dom'

import '../../css/Home.css'

function HomeCompItem(props){
  return(
    <>
      <div className={props.className}>
        <div>
          <img src={props.image} alt=""></img>
        </div>
        <div>
          <NavLink to={props.titleToThis}>{props.titleItem}</NavLink>
        </div>
        <div>
          <h4>{props.titlePar}</h4>
          <p>{props.textOne}</p>
          <p>{props.textTwo}</p>
          <p>{props.textThree}</p>
          <p>{props.textFour}</p>
          <p>{props.textFive}</p>
        </div>
        <div>
          <NavLink to={props.titleToThis}>{props.linkButton}</NavLink>
        </div>
        
      </div>
    </>
  )
}

export default HomeCompItem