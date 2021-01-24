import React, { FC } from 'react';
import { Button, Avatar, Badge } from 'antd';
import {
  MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined,
  BellOutlined,
} from '@ant-design/icons';

import './index.sass';

type PropsType = {
  isCollapsedMenu: boolean,
  handleMenuCollapsing: () => void
}

export const HeaderContent: FC<PropsType> = ({ isCollapsedMenu, handleMenuCollapsing }) => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <b>TO DO LOGO</b>
      </div>
      <Button
        className='header-collapsing'
        type='primary'
        icon={isCollapsedMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={handleMenuCollapsing}
      />
      <ul className='header-nav nav'>
        <li className='nav-item'>
          <Badge>
            <Avatar
              style={{backgroundColor: 'transparent'}}
              shape='square'
              icon={<BellOutlined />}
            />
          </Badge>
        </li>
        <li className='nav-item'>
          <Badge dot
            color='green'
            offset={[0, 20]}
          >
            <Avatar
              style={{backgroundColor: 'transparent'}}
              shape='square'
              icon={<UserOutlined />}
            />
          </Badge>
        </li>
      </ul>
    </div>
  )
}
