import React from 'react'
import auth from '../auth'
import { Button, Form } from 'semantic-ui-react'

class LogIn extends React.Component {

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
        <h4>Don't have an account? <a href='/signup'>Sign Up</a>!</h4>
      </div>
    )
  }

}

export default LogIn
