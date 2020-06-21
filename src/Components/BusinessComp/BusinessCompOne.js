import React from 'react'
import {NavLink} from 'react-router-dom'

function BusinessCompOne(props){
  return(
    <>
      <div className='Bus-comp1'>
        <div className="Bus-comp1-img-box">
          <img src={props.image} className="Bus-comp1-img" alt=""></img>
        </div>
        <div className="Bus-comp1-title">
          <NavLink to="/">Бесконтактные платежи для вашего бизнеса</NavLink>
        </div>
        <div className="Bus-comp1-comment">
          <p >
            Онлайн-платежи с помощью сервиса О!Деньги - это быстро
            и удобно для клиентов, безопасно и выгодно для бизнеса
          </p>
        </div>
        <div className="Bus-comp1-text">
          <h4>Преимущества сотрудничества:</h4>
          <p>Широкая аудитория пользователей приложения</p>
          <p>Повышение узнаваемости и новые каналы продвижения</p>
          <p>Современное перечисление на счет вашей компании</p>
          <p>Онлайн-доступ к аналитике по платежам</p>
          <p>Быстрое подключение</p>
        </div>
        
      </div>
    </>
  )
}

export default BusinessCompOne