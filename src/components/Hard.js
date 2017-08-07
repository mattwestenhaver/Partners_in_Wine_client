import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const Hard = (props) => {
  return (
    <div className='cheeseWrapper'>
      <Grid columns='equal'>
        <Grid.Column>
          <Segment>Gouda</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Cheddar</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Parmesan</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Double Gloucester</Segment>
        </Grid.Column>
      </Grid>
      <Grid columns='equal'>
        <Grid.Column width={4}>
          <Segment>Pecorino</Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>Gruyere</Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>Fontina</Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Hard
