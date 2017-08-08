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
                <p>A veined Italian blue cheese, made from unskimmed cow's milk. It can be buttery or firm, crumbly and quite salty, with a "bite" from its blue veining.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Port </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Stilton</h3>
                <img src={stilton} alt='Stilton' />
                <p>An English cheese, produced in two varieties: Blue, known for its characteristic strong smell and taste, and the lesser-known White.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Sauternes </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Blue</h3>
                <img src={blue} alt='Blue' />
                <p>Blue cheeses are typically aged in a temperature-controlled environment such as a cave. The characteristic flavor of blue cheeses tends to be sharp and salty.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Riesling </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Cambozola</h3>
                <img src={cambozola} alt='Cambozola' />
                <p>A cow's milk cheese that is a combination in style of a French soft-ripened triple cream cheese and Italian Gorgonzola. Cambozola is considerably milder than Gorgonzola piccante and features a smooth, creamy texture with a subdued blue flavour.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Eiswein </NavLink>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
}

export default Blue
