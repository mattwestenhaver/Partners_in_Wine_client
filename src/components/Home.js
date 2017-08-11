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
      <h2 className="App-intro">
        Choose your cheese type...
      </h2>

      <Grid columns='equal'>
        <Grid.Column>
          <NavLink to='/bloomy'>
            <Segment>
              <div className='cheeseBox'>
                <h2><NavLink to='/bloomy'>Bloomy</NavLink></h2>
                <img src={bloomy} alt='Bloomy Cheese' />
                <p>Creamy, decadent cheeses, with a soft rind.</p>
                <h4> Pairing Notes:</h4>
                <p>Bloomy cheeses love crisp whites, dry rosés, sparkling wines, and light-bodied reds with low tannins. Wines with apple, berry, stone fruit, tropical, melon, or citrus flavors work best. </p>
              </div>
            </Segment>
          </NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink to='/hard'>
            <Segment>
              <div className='cheeseBox'>
                <h2><NavLink to='/hard'>Hard</NavLink></h2>
                <img src={hard} alt='Hard Cheese' />
                <p>Stiff cheeses, which are often sharp and/or salty. They can also be aged.</p>
                <h4> Pairing Notes:</h4>
                <p>Harder cheeses love full-bodied whites and tannic reds. Their nuttiness also works with oxidative wines like sherry, and their saltiness makes them terrific with sweet wines.</p>
              </div>
            </Segment>
          </NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink to='/blue'>
            <Segment>
              <div className='cheeseBox'>
                <h2><NavLink to='/blue'>Blue</NavLink></h2>
                <img src={blue} alt='Blue Cheese' />
                <p>Pungent, often salty cheeses, with a blue tinge.</p>
                <h4> Pairing Notes:</h4>
                <p>Blue cheeses need wines with both oomph and sweetness to balance their bold flavors and usually very salty, savory body.</p>
              </div>
            </Segment>
          </NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink to='/fresh'>
            <Segment>
              <div className='cheeseBox'>
                <h2><NavLink to='/fresh'>Fresh</NavLink></h2>
                <img src={fresh} alt='Fresh Cheese' />
                <p>Soft, often spreadable cheeses that can be tangy or mild. They are not usually aged.</p>
                <h4> Pairing Notes:</h4>
                <p>Fresh cheeses compliment light bodied reds, crisp whites, and sparkling wines. Avoid big, tannic red wines like Malbec, Cabernet Sauvignon, and Bordeaux.</p>
              </div>
            </Segment>
          </NavLink>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Home
