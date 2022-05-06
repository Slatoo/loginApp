import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import './style.css';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log('click ', e.key);
    if (e.key === '1') {
      navigate('/home');
    }
    if (e.key === '2') {
      navigate('/home2');
    }
    if (e.key === '3') {
      navigate('/contact');
    }
  };

  return (
    <Menu className="siderMenu" onClick={onClick} mode="inline" items={items} />
  );
};

export default () => <SiderMenu />;
