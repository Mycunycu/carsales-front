import React, { FC } from 'react';
import { Input, Button } from 'antd';
import Icon, { UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';

import './index.sass';

const EnvelopeSvg = () => (
  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5328" width="14" height="14"><path d="M961.772308 369.782154l-421.809231-319.015385a39.384615 39.384615 0 0 0-55.926154 0L65.378462 366.592a69.710769 69.710769 0 0 0-25.993847 50.018462V945.230769a39.384615 39.384615 0 0 0 39.384616 39.384616h866.461538a39.384615 39.384615 0 0 0 39.384616-39.384616V412.278154a65.260308 65.260308 0 0 0-22.843077-42.496zM118.153846 494.828308l254.030769 194.56L118.153846 883.672615v-388.844307z m393.846154 153.127384l348.947692 257.929846H163.052308z m393.846154 235.716923l-253.636923-194.205538L905.846154 494.788923v388.883692z m0-445.44l-296.172308 218.820923-69.710769-53.523692a39.620923 39.620923 0 0 0-55.926154 0l-69.710769 53.523692L118.153846 438.232615v-25.954461l393.846154-289.358769 393.846154 288.728615v26.584615z" fill="#333333" p-id="5329"></path></svg>
)

const EnvelopeIcon = () => <Icon component={EnvelopeSvg} />;

export const RegisterPage: FC = () => {
  return (
    <div className='registration'>
      <div className='registration-container'>
        <h1 className='registration-logo'>To Do Logo</h1>
        <h3 className='registration-header'>Create Account</h3>
        <form className='registration-form'>
          <Input className='registration-input'
            required
            placeholder="Enter your username"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
          <Input className='registration-input'
            required
            placeholder="Enter your email"
            prefix={<EnvelopeIcon />}
          />
          <Input.Password className='registration-input'
            required
            placeholder="input password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <Button className='registration-submit'
            type='primary'
          >
            Register
          </Button>
          <p className='registration-prompt'>Already have an account?</p>
          <Button className='registration-signin'
            type='default'
          >
            Sign In!
          </Button>
        </form>
      </div>
    </div>
  )
}