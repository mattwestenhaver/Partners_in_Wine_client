import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Segment } from 'semantic-ui-react'
import bloomy from '../images/bloomycheese.jpg'
import hard from '../images/hardcheese.jpg'
import blue from '../images/bluecheese.jpg'
import fresh from '../images/fresh_v2.jpg'

const Home = (props) => {
  return (
    <div className='cheeseWrapper'>
      <p className="App-intro">
        Choose your cheese...
      </p>

      <Grid columns='equal'>
        <Grid.Column>
          <Segment>
            <div className='cheeseBox'>
              <h2><NavLink to='/bloomy'>Bloomy</NavLink></h2>
              <img src={bloomy} alt='Bloomy Cheese' />
              <p>Creamy, decadent cheeses, with a soft rind.</p>
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <div className='cheeseBox'>
              <h2><NavLink to='/hard'>Hard</NavLink></h2>
              <img src={hard} alt='Hard Cheese' />
              <p>Stiff cheeses, which are often sharp and/or salty. They can also be aged.</p>
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <div className='cheeseBox'>
              <h2><NavLink to='/blue'>Blue</NavLink></h2>
              <img src={blue} alt='Blue Cheese' />
              <p>Pungent, often salty cheeses, with a blue tinge.</p>
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <div className='cheeseBox'>
              <h2><NavLink to='/fresh'>Fresh</NavLink></h2>
              <img src={fresh} alt='Fresh Cheese' />
              <p>Soft, often spreadable cheeses that can be tangy or mild. They are not usually aged.</p>
            </div>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Home
