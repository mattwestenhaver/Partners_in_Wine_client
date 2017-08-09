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
                <h2>Camembert</h2>
                <img src={camembert} alt='Camembert' />
                <p>A soft, creamy, surface-ripened cow's milk cheese. It was first made in the late 18th century at Camembert, Normandy, in northern France.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/wine'> Champagne </NavLink>
              </div>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Brie</h2>
                <img src={brie} alt='Brie' />
                <p>A soft cow's-milk cheese named after Brie, the French region from which it originated. The rind is typically eaten, with its flavor depending largely upon the ingredients used and its manufacturing environment.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/wine'> Chardonnay </NavLink>
              </div>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Robiola</h2>
                <img src={robiola} alt='Robiola' />
                <p>An Italian soft-ripened cheese of the Stracchino family. It is from the Langhe region and made with varying proportions of cow’s, goat’s milk and sheep milk.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/wine'> Sparkling Wine </NavLink>
              </div>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <div className='cheeseBox'>
                <h2>Taleggio</h2>
                <img src={taleggio} alt='Taleggio' />
                <p>A semisoft, washed-rind, smear-ripened Italian cheese that is named after Val Taleggio. The cheese has a thin crust and a strong aroma, but its flavor is comparatively mild with an unusual fruity tang.</p>
                <h5>Pairs well with: </h5>
                <NavLink to='/wine'> Pinot Blanc </NavLink>
              </div>
            </Segment>
          </Grid.Column>

        </Grid>
      </div>
    </div>
  )
}

export default Bloomy
