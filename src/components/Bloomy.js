import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

import camembert from '../images/camembert.jpg'
import brie from '../images/Brie.jpg'
import robiola from '../images/Robiola.jpg'
import taleggio from '../images/Taleggio.jpg'

const Bloomy = (props) => {
  return (
    <div>
      <h2 className="cheeseTitle"> Bloomy Cheeses </h2>
      <div className='cheeseWrapper'>
        <Grid columns='equal'>

          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Camembert</h3>
                <img src={camembert} alt='Camembert' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Brie</h3>
                <img src={brie} alt='Brie' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Robiola</h3>
                <img src={robiola} alt='Robiola' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Taleggio</h3>
                <img src={taleggio} alt='Taleggio' />
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

export default Bloomy
