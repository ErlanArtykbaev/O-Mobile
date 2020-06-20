import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './Components/Home'
import News from './Components/News'
import Business from './Components/Business'
import Pocket from './Components/Pocket'

/**
 * if you are reading it, i did it myself :)
 */

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/news" component={News}  />
          <Route path="/business" component={Business}  />
          <Route path="/pocket" component={Pocket} />
        </Switch>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
