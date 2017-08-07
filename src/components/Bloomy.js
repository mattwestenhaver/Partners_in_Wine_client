import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const Bloomy = (props) => {
  return (
    <div className='cheeseWrapper'>
      <Grid columns='equal'>
        <Grid.Column>
          <Segment>Camembert</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Brie</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Robiola</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Taleggio</Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default Bloomy
