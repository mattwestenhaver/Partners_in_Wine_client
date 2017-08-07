import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const Blue = (props) => {
  return (
    <div className='cheeseWrapper'>
      <Grid columns='equal'>
        <Grid.Column>
          <Segment>Gorgonzola</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Stilton</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Blue</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Cambozola</Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Blue
