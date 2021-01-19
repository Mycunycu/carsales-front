import React, { FC, useState } from 'react';
import { Layout, Menu } from 'antd';

import { Header as HeaderContent } from '../../common/header';

import 'antd/dist/antd.css';
import './index.sass';

const { Header, Footer, Sider, Content } = Layout;

export const HomePage: FC = () => {
  const [isCollapsed, toggleCollapsed] = useState(false);

  const handleMenuCollapsing = () => {
    toggleCollapsed(!isCollapsed);
  }

  return (
    <Layout>
      <Header>
        <HeaderContent
          handleMenuCollapsing={handleMenuCollapsing}
        />
      </Header>
      <Layout>
        <Sider collapsible
          trigger={null}
          collapsed={isCollapsed}>
          <Menu mode='inline'>
            <Menu.Item key='1'>
              Item 1
            </Menu.Item>
            <Menu.Item key='2'>
              Item 2
            </Menu.Item>
            <Menu.Item key='3'>
              Item 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}
