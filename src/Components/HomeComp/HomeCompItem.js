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
        <div className="Home-comp-item-title-link">
          <NavLink style={{textDecoration: 'none', color: 'white'}} to={props.titleToThis}>{props.titleItem}</NavLink>
        </div>
        <div className="Home-comp-text">
          <h4>{props.titlePar}</h4>
          <p>{props.textOne}</p>
          <p>{props.textTwo}</p>
          <p>{props.textThree}</p>
          <p>{props.textFour}</p>
          <p>{props.textFive}</p>
        </div>
        <div className={props.lowLink}>
          <NavLink 
            style={{
              textDecoration: 'none', 
              color: '#FF009E'
            }} 
            to={
              props.titleToThis
            }>
              {props.linkButton}
          </NavLink>
        </div>  
        
      </div>
    </>
  )
}

export default HomeCompItem