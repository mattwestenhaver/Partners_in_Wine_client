import React from 'react'
import { Grid, Segment, Button, Form } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const apiKey = process.env.API_KEY

class Wine extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: props.currentUser,
      wines: []
    }
  }

  getWines(formData){
    console.log("Getting wines..")
    axios({
      url: `https://ancient-sierra-55559.herokuapp.com/wines?type=${formData.varietal}&xp=${formData.price}`
    })
      .then((response) => {
        console.log(response)

      })
  }

  componentDidMount(){
    // this.getWines()
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const formData = {
      zipcode: this.refs.zipcode.value,
      price: this.refs.price.value,
      varietal: this.refs.varietal.value
    }
    console.log(formData)
    this.getWines(formData)
  }


  render(){
    const
      currentUser = this.props.currentUser,
      varietal = this.props.varietal


    return (
      <div>
      <h1>Wine Suggestions</h1>
        <div className='wineBox'>
          <Grid>
            <Grid.Column width={11}>
              <Segment>
                <div className='cheeseBox'>
                  <h3>List of Wines</h3>
                  <p>Here are all the wines.</p>
                  <NavLink to='/'> Go back to home  </NavLink>
                </div>
              </Segment>
            </Grid.Column>

            <Grid.Column width={3}>
              <Segment>
                <div className='cheeseBox'>
                  <h3> Tailor your Wine Search: </h3>
                    <Form onSubmit={this.handleFormSubmit.bind(this)}>
                      <Form.Field>
                        <input ref="varietal" defaultValue={this.props.type} />
                      </Form.Field>
                      <Form.Field>
                        { currentUser ? <input ref="zipcode" defaultValue={currentUser.zipcode} /> : <input ref="zipcode" defaultValue={90404} /> }
                      </Form.Field>
                      <Form.Field>
                        <input ref="price" defaultValue='$$' />
                      </Form.Field>
                      <Button color='olive' type='submit' className='filterButton'>Update Search</Button>
                    </Form>
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Wine
