import React from 'react'
import auth from '../auth'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class SignUp extends React.Component {

  handleFormSubmit(evt) {
    evt.preventDefault()
    const formData = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      zipcode: this.refs.zipcode.value,
      password: this.refs.password.value
    }
    console.log(formData)

    auth.signUp(formData).then(success => {
      console.log(success)
    })
  }

  render() {
    return (
      <div className="signUp">
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
            <Checkbox label='I pledge allegiance to these cheeses' />
          </Form.Field>
          <Button type='submit'>Create Account</Button>
        </Form>
      </div>
    )
  }

}

export default SignUp
