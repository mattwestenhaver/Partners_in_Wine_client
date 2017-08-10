import React from 'react'
import { Grid, Segment, Button, Form } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import List from './List.js'

class Wine extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: props.currentUser,
      wines: [],
      price: 30
    }
  }

  getWines(formData){
    console.log("Getting wines..")
    axios({
      url: `https://ancient-sierra-55559.herokuapp.com/wines?type=${formData.varietal}&xp=${formData.price}`
    })
      .then((response) => {
        console.log(response)
        this.setState({
          wines: response.data.wines
        })
        console.log('wine',this.state.wines)
      })
  }

  componentDidMount(){
    // this.getWines()
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const formData = {
      zipcode: this.refs.zipcode.value,
      price: this.state.price,
      varietal: this.refs.varietal.value
    }
    console.log(formData)
    this.getWines(formData)
  }

  priceLow(evt) {
    evt.preventDefault()
    this.setState({
      price: 15
    })
  }

  priceMedium(evt) {
    evt.preventDefault()
    this.setState({
      price: 40
    })
  }

  priceHigh(evt) {
    evt.preventDefault()
    this.setState({
      price: 100
    })
  }


  render(){

    const
      currentUser = this.props.currentUser

    return (
      <div>
      <h1>Wine Suggestions</h1>
        <div className='wineBox'>
          <Grid>
            <Grid.Column width={9}>
              <Segment>
                <div>
                  <h3>List of Wines</h3>
                  <List items={this.state.wines} />
                  <NavLink to='/'> Go back to home  </NavLink>
                </div>
              </Segment>
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment>
                <div className='wineSearcher'>
                  <h3> Tailor your Wine Search: </h3>
                    <div className='buttonGroup'>
                      <Button.Group floated='left' size='medium'>
                        <Button onClick={this.priceLow.bind(this)}>$</Button>
                        <Button onClick={this.priceMedium.bind(this)}>$$</Button>
                        <Button onClick={this.priceHigh.bind(this)}>$$$</Button>
                      </Button.Group>
                    </div><br /><br /><br />
                    <Form onSubmit={this.handleFormSubmit.bind(this)}>
                      <h4>Type:</h4>
                      <Form.Field>
                        <input ref="varietal" defaultValue={this.props.type} />
                      </Form.Field>
                      <h4>Zip Code:</h4>
                      <Form.Field>
                        { currentUser
                          ? <input ref="zipcode" defaultValue={currentUser.zipcode} />
                          : <input ref="zipcode" defaultValue={90404} />
                        }
                      </Form.Field>
                      <Button color='olive' type='submit' className='filterButton'>Filter</Button>
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
