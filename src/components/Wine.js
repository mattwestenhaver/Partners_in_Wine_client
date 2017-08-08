import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Wine extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: props.currentUser
    }
  }

  render(){
    return (
      <div>
      <h1> This is the Wine Page</h1>
          <Grid>
            <Grid.Column width={12}>
                <div className='cheeseBox'>
                  <h3>List of Wines</h3>
                  <p>Here are all the wines.</p>
                  <NavLink to='/'> Go back to home  </NavLink>
                </div>
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment>
                <div className='cheeseBox'>
                  <h3> Menu Page </h3>
                  <p>Here's the menu of all the clients</p>
                  <h5>Pairs well with: </h5>
                  <NavLink to='/'> Go back to home </NavLink>
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

export default Wine
