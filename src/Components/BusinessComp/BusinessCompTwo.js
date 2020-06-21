import React from 'react'
import {Link} from 'react-router-dom'

function BusinessCompTwo(){
  return(
    <>
      <div className="Bus-comp2">
        <h3>Как стать партнером?</h3>
        <span>Всего три простых шага:</span>
        <p>
          <span>1</span>
          Представление учредительных документов
        </p>
        <p>
          <span>2</span>
          Подписание договора
        </p>
        <p>
          <span>3</span>
          Обучение сотрудников
        </p>

        <Link to="/" className="Bus-comp2-lowlink" >Оставить заявку</Link>
        
      </div>
    </>
  )
}

export default BusinessCompTwo