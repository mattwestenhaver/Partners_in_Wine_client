import React from 'react'
import auth from '../auth'
import { Button, Form } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class LogIn extends React.Component {

  state = {
    shouldRedirect: false
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const formData = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }

    console.log(formData)
    auth.logIn(formData).then(user => {
      if(user) {
        this.props.onLogIn()
        this.setState({shouldRedirect: true})
      }
      console.log(user)
    })
  }

  render() {
    return (
      this.state.shouldRedirect
      ? <Redirect to='/' />
      : (
        <div className='logIn'>
          <h1>Log In</h1>
          <Form onSubmit={this.handleFormSubmit.bind(this)}>
            <Form.Field>
              <input ref="email" placeholder='Email' />
            </Form.Field>
            <Form.Field>
              <input ref="password" type="password" placeholder='Password' />
            </Form.Field>
            <Button color='violet' type='submit' className='logInButton'>Log In</Button>
          </Form>
          <h4>Don't have an account? <span className='blue'><a href='/signup'>Sign Up</a></span>!</h4>
        </div>
      )
    )
  }

}

export default LogIn
