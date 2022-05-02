import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import './style.css';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Home', 'sub1', <MailOutlined />, [
    getItem(
      'Item 1',
      'g1',
      null,
      [getItem('Option 1', '1'), getItem('Option 2', '2')],
      'group',
    ),
  ]),
  getItem('Contacts', 'sub2', <AppstoreOutlined />, [
    getItem('Option 3', '3'),
    getItem('Clients', 'sub3', null, [getItem('Option 4', '4')]),
  ]),
];

const SiderMenu = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      className="siderMenu"
      onClick={onClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default () => <SiderMenu />;
