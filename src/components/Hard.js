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
                <h3>Gouda</h3>
                <img src={gouda} alt='Gouda' />
                <p>A Dutch yellow cheese made from cow's milk. It is named after the city of Gouda in the Netherlands. It has a "lovely fruity tang" with a "sweet finish", that may take on "an almost butterscotch flavor" if aged over two years.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Merlot </NavLink>
                <NavLink to='/'> Grenache </NavLink>
                <NavLink to='/'> Barbera </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Cheddar</h3>
                <img src={cheddar} alt='Cheddar' />
                <p>A relatively hard, off-white, natural cheese. Originating in the British village of Cheddar in Somerset, cheeses of this style are produced beyond this region and in several countries around the world.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Cabernet Sauvignon </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Parmesan</h3>
                <img src={parmesan} alt='Parmesan' />
                <p>A hard, granular cheese. It has a sharp, complex fruity/nutty taste with a strong savory flavor and a slightly gritty texture. Inferior versions can impart a bitter taste.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Chianti </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Double Gloucester</h3>
                <img src={double_gloucester} alt='Double Gloucester' />
                <p>A traditional cheese made in Gloucestershire, England, since the 16th century, at one time made only with the milk of the once nearly extinct Gloucester cattle. It is allowed to age for longer periods than Single, and has a stronger and more savoury flavour.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Zinfandel </NavLink>
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
                <p>A family of hard Italian cheeses made from ewe's milk. The more matured cheeses are harder but still crumbly in texture and have decidedly buttery and nutty flavours. The other two types semi-stagionato and fresco have a softer texture and milder cream and milk tastes.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Valpolicella </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Gruyere</h3>
                <img src={gruyere} alt='Gruyere' />
                <p>A hard yellow cheese, named after the town of Gruyères in Switzerland, and originated in the cantons of Fribourg, Vaud, Neuchâtel, Jura, and Berne. It is often described as creamy and nutty when young, becoming more assertive, earthy, and complex as it matures.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Sauvignon Blanc </NavLink>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h3>Fontina</h3>
                <img src={fontina} alt='Fontina' />
                <p>An Italian cow's milk cheese. The best cheese is obtained during the summer when the cows are moved to high altitudes and fed only with rich grass to give it a distinctive aroma. It is noted for its earthy, mushroomy, and woody taste, and pairs exceptionally well with roast meats and truffles. It has a rich and creamy flavor which gets nuttier with aging.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/'> Bardolino </NavLink>
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
}

export default Hard
