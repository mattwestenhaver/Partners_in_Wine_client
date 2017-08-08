import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

import gorgonzola from '../images/gorgonzola.jpg'
import stilton from '../images/stilton.jpg'
import blue from '../images/blue.jpg'
import cambozola from '../images/Cambozola.jpg'

const Blue = (props) => {
  return (
    <div>
      <h2 className="cheeseTitle"> Blue Cheeses </h2>
      <div className='cheeseWrapper'>
        <Grid columns='equal'>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Gorgonzola</h3>
                <img src={gorgonzola} alt='Gorgonzola' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Stilton</h3>
                <img src={stilton} alt='Stilton' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Blue</h3>
                <img src={blue} alt='Blue' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Cambozola</h3>
                <img src={cambozola} alt='Cambozola' />
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

export default Blue
