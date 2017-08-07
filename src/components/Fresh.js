import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const Fresh = (props) => {
  return (
    <div className='cheeseWrapper'>
      <Grid columns='equal'>
        <Grid.Column>
          <Segment>Ricotta</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Mozzarella</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Goat</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Feta</Segment>
        </Grid.Column>
      </Grid>
      <Grid columns='equal'>
        <Grid.Column width={4}>
          <Segment>Burrata</Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>Queso Fresco</Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Fresh
