import React from 'react'

import NavBar from './NavBar'
import Footer from './Footer'

import '../css/News.css'

import flower1 from '../img/flower1.jpg'
import flower2 from '../img/flower2.jpg'
import NewsCompItem from './NewsComp/NewsCompItem'
import calIcon from '../img/icon-calendar.png'
import flower3 from '../img/flower3.jpg'


//the News page 
function News(){
  return(
    <>
      <NavBar />
      <div className="News-main">
        <div className="News-main-title">
          <p>Новости и акции</p>
        </div>
        <NewsCompItem
          img={flower1}
          title="Скидка 10% в салоне цветов Henry Bonnar"
          icon={flower2}
          calIcon={calIcon}
          date="до 25 июня 2020"
        />
        <NewsCompItem
          img={flower3}
          title="-5% в сети магазинов правильного питания Six Box"
          icon={flower2}
          calIcon={calIcon}
          date="до 25 июня 2020"
        />
        <NewsCompItem
          img={flower1}
          title="Скидка 10% в салоне цветов Henry Bonnar"
          icon={flower2}
          calIcon={calIcon}
          date="до 25 июня 2020"
        />
      </div>
      
      <Footer />
    </>
  )
}

export default News