import React from 'react';
import 'antd/dist/antd.css';
import './style.css';
import SiderMenu from '../../components/menu/menu';
import { Layout } from 'antd';
import Contact1 from '../../components/contact/contact';
const { Sider } = Layout;

export default function ContactPage() {
  return (
    <>
      <Layout>
        <Sider className="siderHome">
          <SiderMenu />
        </Sider>
        <Layout>
          <Contact1 />
        </Layout>
      </Layout>
    </>
  );
}
