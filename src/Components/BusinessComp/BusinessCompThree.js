import React from 'react'
import {Link} from 'react-router-dom'

import download from '../../img/down-arrow.png'

function BusinessCompThree(){
  return(
    <>
      <div className="Bus-comp3">
        <div>
          <p className="Bus-comp3-title">
            Скачайте документы, чтобы ознакомиться с условиями сотрудничества:
          </p>
        </div>
        <div className="Bus-comp3-links" >
          <Link className="Bus-comp3-flex" to="/">
            <p>Договор для юрлиц</p>
            <img src={download} alt="" className="download"></img>
          </Link>
          <Link className="Bus-comp3-flex" to="/">
            <p>Договор для физлиц</p>
            <img src={download} alt="" className="download"></img>
          </Link>
          <Link className="Bus-comp3-flex" to="/">
            <p>Список необходимых документов</p>
            <img src={download} alt="" className="download"></img>
          </Link>
          
        </div>
      </div>
    </>
  )
}

export default BusinessCompThree