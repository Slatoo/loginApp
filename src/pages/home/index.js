import React from 'react';
import 'antd/dist/antd.css';
import './style.css';
import SiderMenu from '../../components/menu/menu';
import { Layout } from 'antd';
import HomePage1 from '../../components/home/home';

const { Sider } = Layout;

export default function Home() {
  return (
    <>
      <Layout>
        <Sider className="siderHome">
          <SiderMenu />
        </Sider>
        <Layout>
          <HomePage1 />
        </Layout>
      </Layout>
    </>
  );
}
