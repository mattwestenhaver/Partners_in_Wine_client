import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

import ricotta from '../images/ricotta.jpg'
import mozzarella from '../images/mozzarella.jpg'
import goat from '../images/goat cheese.jpg'
import feta from '../images/feta.jpg'
import burrata from '../images/Burrata.jpg'
import queso_fresco from '../images/queso fresco.jpg'

const Fresh = (props) => {
  return (
    <div>
      <h2 className="cheeseTitle"> Fresh Cheeses </h2>
      <div className='cheeseWrapper'>
        <Grid columns='equal'>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Ricotta</h3>
                <img src={ricotta} alt='Ricotta' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Mozzarella</h3>
                <img src={mozzarella} alt='Mozzarella' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Goat</h3>
                <img src={goat} alt='Goat' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Feta</h3>
                <img src={feta} alt='Feta' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
        <Grid columns={4}>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Burrata</h3>
                <img src={burrata} alt='Burrata' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Queso Fresco</h3>
                <img src={queso_fresco} alt='Queso Fresco' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
}

export default Fresh
