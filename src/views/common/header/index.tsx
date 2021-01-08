import React, { FC } from 'react';
import { Button } from 'antd';

//import logo from '../../../assets/img/logo.png';

import './index.sass';

type PropsType = {
  handleMenuCollapsing: () => void
}

export const Header: FC<PropsType> = ({ handleMenuCollapsing }) => {
  return (
    <div className='header'>
      <div className='header-logo logo'>
        {/* <img src={logo} className='logo-img' alt='logotype img'></img> */}
        <b>TO DO LOGO</b>
      </div>
      <Button
        type='primary'
        onClick={handleMenuCollapsing}
      >
        Menu
      </Button>
    </div>
  )
}
