import React, { FC, useState } from 'react';
import { Layout, Menu } from 'antd';
import { PieChartOutlined, UserOutlined } from '@ant-design/icons';

import { HeaderContent } from '../../common/header';

import 'antd/dist/antd.css';
import './index.sass';

const { Header, Footer, Sider, Content } = Layout;

export const HomePage: FC = () => {
  const [isCollapsedMenu, toggleCollapsed] = useState(false);

  const handleMenuCollapsing = () => {
    toggleCollapsed(!isCollapsedMenu);
  }

  return (
    <Layout className='page'>
      <Header>
        <HeaderContent
          isCollapsedMenu={isCollapsedMenu}
          handleMenuCollapsing={handleMenuCollapsing}
        />
      </Header>
      <Layout>
        <Sider collapsible
          trigger={null}
          collapsed={isCollapsedMenu}>
          <Menu mode='inline'>
            <Menu.Item
              key='1'
              icon={<PieChartOutlined />}
            >
              Item 1
            </Menu.Item>
            <Menu.Item
              key='2'
              icon={<UserOutlined />}
            >
              Item 2
            </Menu.Item>
            <Menu.Item
              key='3'
              icon={<UserOutlined />}
            >
              Item 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          Content
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}
