import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

import gouda from '../images/Gouda.jpg'
import cheddar from '../images/Cheddar.jpg'
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
                <h2>Gouda</h2>
                <img src={gouda} alt='Gouda' />
                <p>A Dutch yellow cheese made from cow's milk. It has a "lovely fruity tang" with a "sweet finish", that may take on "an almost butterscotch flavor" if aged over two years.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/wine?type=Merlot'> Merlot </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Cheddar</h2>
                <img src={cheddar} alt='Cheddar' />
                <p>A relatively hard, off-white, natural cheese. Originating in the British village of Cheddar in Somerset, cheeses of this style experienced widespread international adoption.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/wine?type=Cabernet%20Sauvignon'> Cabernet Sauvignon </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Parmesan</h2>
                <img src={parmesan} alt='Parmesan' />
                <p>A hard, granular cheese. It has a sharp, complex fruity/nutty taste with a strong savory flavor and a slightly gritty texture. Inferior versions can impart a bitter taste.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/wine?type=Chianti'> Chianti </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Double Gloucester</h2>
                <img src={double_gloucester} alt='Double Gloucester' />
                <p>A traditional cheese made in Gloucestershire, England, since the 16th century. It is allowed to age for longer periods than Single, and has a stronger and more savoury flavour.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/wine?type=Zinfandel'> Zinfandel </NavLink>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
        <Grid columns={4}>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Pecorino</h2>
                <img src={pecorino} alt='Pecorino' />
                <p>A family of hard Italian cheeses made from ewe's milk. The more matured cheeses are harder but crumbly in texture and have buttery and nutty flavours, while younger versions are softer with a more mild taste.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/wine?type=Valpolicella'> Valpolicella </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Gruyere</h2>
                <img src={gruyere} alt='Gruyere' />
                <p>A hard yellow Swiss cheese. It is often described as creamy and nutty when young, becoming more assertive, earthy, and complex as it matures.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/wine?type=Sauvignon%20Blanc'> Sauvignon Blanc </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Fontina</h2>
                <img src={fontina} alt='Fontina' />
                <p>An Italian cow's milk cheese. It is noted for its earthy, mushroomy, and woody taste, and pairs well with roast meats and truffles. It has a rich and creamy flavor which gets nuttier with aging.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/wine?type=Bardolino'> Bardolino </NavLink>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
}

export default Hard
