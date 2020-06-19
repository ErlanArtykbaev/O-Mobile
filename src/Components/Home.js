import React from 'react'

import NavBar from './NavBar'
import Footer from './Footer'

import '../css/Home.css'
import '../css/App.css'

import Slide1 from '../img/slide-1.jpg'
import Slide2 from '../img/slide-2.jpg'
import Slide3 from '../img/slide-3.png'

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
          <h1>flex</h1>
          <div className="Home-content-item">Личный кабинет</div>
          <div className="Home-content-item">Кошолек О! Деньги</div>
          <div className="Home-content-item">Кредиты</div>
          <div className="Home-content-item">О! Бонус</div>
        </div>
        <div>
          <span>Новости и акции</span>
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <button>Все новости</button>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home