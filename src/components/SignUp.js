import React from 'react'
import auth from '../auth'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class SignUp extends React.Component {

  state = {
    shouldRedirect: false
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const formData = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      zipcode: this.refs.zipcode.value,
      password: this.refs.password.value
    }
    auth.signUp(formData).then(success => {
      this.setState({
        shouldRedirect: true
      })
    })
  }

  render() {
    return (
      this.state.shouldRedirect
      ? <Redirect to='/login' />
      : (
        <div className="signUp">
          <h1>Sign Up</h1>
          <Form onSubmit={this.handleFormSubmit.bind(this)}>
            <Form.Field>
              <input ref="name" placeholder='Name' />
            </Form.Field>
            <Form.Field>
              <input ref="email" placeholder='Email' />
            </Form.Field>
            <Form.Field>
              <input type='number' ref="zipcode" placeholder='Zip Code' />
            </Form.Field>
            <Form.Field>
              <input ref="password" type="password" placeholder='Password' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I pledge allegiance to the cheeses' />
            </Form.Field>
            <Button color='violet' type='submit' className='signUpButton'>Create Account</Button>
          </Form>
          <h4>Already have an account? <span className='blue'><a href='/login'>Log In</a></span>!</h4>
        </div>
      )
    )
  }

}

export default SignUp
