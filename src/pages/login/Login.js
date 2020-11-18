import React, { Component, useRef } from 'react';
import AppForm from '../../components/app-form/AppForm';
import AppInput from '../../components/app-input/AppInput';
import './Login.scss';
import { connect } from "react-redux";

import {
  onLogin
} from '../../redux/auth/auth.effects';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: React.createRef()
    };
  }

  async onSubmit() {
    const formStatus = this.state.form.current.validateForm();
    if (formStatus) {
      const value = this.state.form.current.getValue();
      console.log(value);
      const user = await this.props.onLogin(value);
      console.log(user);
      if (user) {
        this.props.history.push('/profile');
      }
    }
  }

  render() {
    return (
      <div className='login shadow-1 p-30'>
        <AppForm ref={this.state.form}>
          <AppInput
            placeholder="user@email.com"
            field="email"
            name="Email"
            type="email"
            label="Email"
            required
          />
          <AppInput className='mt-30'
                    // placeholder="Password"
                    field="password"
                    name="Password"
                    type="password"
                    label="password"
                    required
                  />
        </AppForm>
        <button className="app-button-dark mt-20" onClick={() => this.onSubmit()}>Login</button>
  
      </div>
    );
  }
};


const mapStateToProps = (state) => ({
  ...state.authReducer
});

const mapDispatchToProps = {
  onLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);