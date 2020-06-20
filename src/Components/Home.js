import React from 'react'

import NavBar from './NavBar'
import Footer from './Footer'
import HomeCompItem from './HomeComp/HomeCompItem'
import HomeNewsCompItem from './HomeComp/HomeNewsCompItem'

import '../css/Home.css'
import '../css/App.css'

import Slide1 from '../img/slide-1.jpg'
import Slide2 from '../img/slide-2.jpg'
import Slide3 from '../img/slide-3.png'
import ImageComp1 from '../img/home-comp-1.png'
import flower1 from '../img/flower1.jpg'
import { NavLink } from 'react-router-dom'


function Home(){
  return(
    <>
      <NavBar />
      <main>
        <div className="Home-slider">
          
          <div className="Home-slides">
            <input type="radio" name="r" id="r1" checked />
            <input type="radio" name="r" id="r2" />
            <input type="radio" name="r" id="r3" />
            <div className="Home-slide s1">
              <img src={Slide1} alt=""></img>
            </div>
            <div className="Home-slide">
              <img src={Slide2} alt=""></img>
            </div>
            <div className="Home-slide">
              <img src={Slide3} alt=""></img>
            </div>
          </div>

          <div className="slide-navigation">
            <label for="r1" className="bar"></label>
            <label for="r2" className="bar"></label>
            <label for="r3" className="bar"></label>
          </div>

        </div>

        <div className="Home-content">
          <div>
            <HomeCompItem 
              className="Home-content-item" 
              image={ImageComp1}
              titleItem="Личный кабинет"
              titleToThis="/self"
              titlePar="Управляй своим номером и номерами близких!"
              textOne="Просмотр остатка минут и ГБ"
              textTwo="Выбор тарифа"
              textThree="Подключение и отключение услуг"
              textFour="Детализация расходов и событий"
              textFive="Забота о балансе близких"
            />
            <HomeCompItem 
              className="Home-content-item" 
              image={ImageComp1}
              titleItem="Кредиты"
              titleToThis="/credits"
              titlePar="Не хватает до зарплаты? Кредит без справок и поручителей прямо в приложении"
              toThis="/credits"
              linkButton="Все новости"
              lowLink="Home-comp-low-link"
            />
          </div>
          <div>
            <HomeCompItem 
              className="Home-content-item" 
              image={ImageComp1}
              titleItem="Кошелек О! Деньги"
              titleToThis="/pocket"
              titlePar="Оплачивайте бесконтактно с баланса, кошелька или с добавленной карты"
              textOne="Оплата комуслуг, интернета, мобильной связи, штрафов, игр"
              textTwo="Оплата в магазинах, кофейнях, такси и даже на АЗС"
              textThree="Денежные переводы на другие кошельки и карты"
              textFour="Пополнение тарспортных карт 'Тулпар'"
              textFive="Госуслуги в электронном формате"
              toThis="/pocket"
              linkButton="Переводы на О!Деньги с любой карты >"
            />
            
            <HomeCompItem 
              className="Home-content-item" 
              image={ImageComp1}
              titleItem="О! Бонус"
              titleToThis="/bonus"
              titlePar="Получайте бонусы за оплату через О!Деньги и расплачивайтесь ими у наших друзей!"
              toThis="/bonus"
              linkButton="Подробнее"
              lowLink="Home-comp-low-link"
            />
          </div>
          
          
          
        </div>


        <div className="Home-news">
          <span className="Home-news-title">Новости и акции</span>
          <div className="Home-news-components">
            <HomeNewsCompItem 
              img={flower1}
              text="Скидка 10% в салоне цветов Henry Bonnar"
              to="/news"
            />
            <HomeNewsCompItem 
              img={flower1}
              text="-5% в сети магазинов правильного питания Six Box"
              to="/news"
            />
            <HomeNewsCompItem 
              img={flower1}
              text="Скидка 10% в салоне цветов Henry Bonnar"
              to="/news"
            />
          </div>
          <NavLink className="Home-news-last-link" to="/news" style={{textDecoration: 'none'}}>Все новости</NavLink>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home