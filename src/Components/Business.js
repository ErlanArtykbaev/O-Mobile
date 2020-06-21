import React from 'react'

import NavBar from './NavBar'
import Footer from './Footer'
import BusinessCompOne from './BusinessComp/BusinessCompOne'
import BusinessCompTwo from './BusinessComp/BusinessCompTwo'
import BusinessCompThree from './BusinessComp/BusinessCompThree'
import '../css/Business.css'

import girl from '../img/bus-girl.jpg'

function Business(){
  return(
    <>
      <NavBar />
        <div className="Bus-main">
          <BusinessCompOne
            image={girl}
          />
          <BusinessCompTwo />
          <BusinessCompThree />
        </div>
      <Footer />
    </>
  )
}

export default Business