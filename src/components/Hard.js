import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

import gouda from '../images/Gouda.jpg'
import brie from '../images/Brie.jpg'
import parmesan from '../images/Parmesan.jpg'
import double_gloucester from '../images/double_glouchester.jpg'
import pecorino from '../images/pecorino.jpg'
import gruyere from '../images/Gruyere.jpg'
import fontina from '../images/Fontina.jpg'

const Hard = (props) => {
  return (
    <div>
      <h2 className="cheeseTitle"> Hard Cheeses </h2>
      <div className='cheeseWrapper'>
        <Grid columns='equal'>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Gouda</h3>
                <img src={gouda} alt='Gouda' />
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
                <h3>Parmesan</h3>
                <img src={parmesan} alt='Parmesan' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Double Gloucester</h3>
                <img src={double_gloucester} alt='Double Gloucester' />
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
                <h3>Pecorino</h3>
                <img src={pecorino} alt='Pecorino' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Gruyere</h3>
                <img src={gruyere} alt='Gruyere' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Fontina</h3>
                <img src={fontina} alt='Fontina' />
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

export default Hard
