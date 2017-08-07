import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
      <p className="App-intro">
        Choose your cheese...
      </p>
      <div>
        <h2><NavLink to='/bloomy'>Bloomy</NavLink></h2>
        <p>Creamy, decadent cheeses, with a soft rind.</p>
      </div>
      <div>
        <h2><NavLink to='/hard'>Hard</NavLink></h2>
        <p>Stiff cheeses, which are often sharp and/or salty. They can also be aged.</p>
      </div>
      <div>
        <h2><NavLink to='/blue'>Blue</NavLink></h2>
        <p>Pungent, often salty cheeses, with a blue tinge.</p>
      </div>
      <div>
        <h2><NavLink to='/fresh'>Fresh</NavLink></h2>
        <p>Soft, often spreadable cheeses that can be tangy or mild. They are not usually aged.</p>
      </div>
    </div>
  )
}

export default Home
