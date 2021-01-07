import React, { FC } from 'react';
import { Layout } from 'antd';

import { Header as HeaderContent } from '../../../common/header';

import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;


export const HomePage: FC = () => {
  return (
    <Layout>
      <Header>
        <HeaderContent />
      </Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  )
}