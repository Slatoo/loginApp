import { React, useState } from 'react';
import 'antd/dist/antd.css';
import {
  Layout,
  Button,
  Typography,
  Input,
  Row,
  Col,
  Select,
  Cascader,
  Tooltip,
} from 'antd';
import {
  UserOutlined,
  InfoCircleOutlined,
  UserAddOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import './style.css';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export default function Contact1() {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState({
    user: '',
    company: '',
    description: '',
    email: '',
    areaCode: '',
    addresss: '',
  });
  const [error, setError] = useState({
    user: '',
    company: '',
    description: '',
    email: '',
    areaCode: '',
    addresss: '',
  });

  const handleCreate = () => {
    let error = {
      user: '',
      company: '',
      description: '',
      email: '',
      areaCode: '',
      addresss: '',
    };
    if (data.user === '') {
      error.user = 'Fill the empty field';
    }
    if (data.company === '') {
      error.company = 'Fill the empty field';
    }
    if (data.description === '') {
      error.description = 'Fill the empty field';
    }
    if (data.email === '') {
      error.email = 'Fill the empty field';
    }
    if (data.areaCode === '') {
      error.areaCode = 'Fill the empty field';
    }
    if (data.addresss === '') {
      error.addresss = 'Fill the empty field';
    }
    if (error) {
      setError(error);
    } else {
      setError({});
    }
  };
  const handleText = (evt) => {
    setData((prevState) => ({ ...prevState, ...{ [evt.id]: evt.value } }));
  };
  const clearInput = () => {
    setError(false);
  };

  const handleCollapsed = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };
  const handleSelect = (value) => {
    setData({
      ...data,
      addresss: value,
    });
  };
  const { TextArea } = Input;
  const { Option } = Select;
  const options = [
    {
      value: 'State1',
      label: 'Nueva Esparta',
      children: [
        {
          value: 'Municipio1',
          label: 'García',
          children: [
            {
              value: 'Parroquia1 ',
              label: 'Francisco Fajardo',
            },
          ],
        },
      ],
    },
    {
      value: 'State2',
      label: 'Caracas',
      children: [
        {
          value: 'Municipio2',
          label: 'Libertador',
          children: [
            {
              value: 'Parroquia2',
              label: 'La pastora',
            },
          ],
        },
      ],
    },
  ];
  return (
    <Layout>
      <Header className="headerHome">
        <Title className="welcome" level={1}>
          New Contact
        </Title>
        <Text className="textHome">
          Add your friends or family as contacts so you can make a booking of
          them easily too.
        </Text>
      </Header>

      <Content className="contentHome">
        <Row>
          <Col md={12} span={24}>
            <div className="FormConten1">
              <div className="inputContent">
                <Text strong>User Name</Text>
                <Input
                  type={'text'}
                  id="user"
                  value={data.user}
                  onChange={(evt) => handleText(evt.target)}
                  placeholder="Enter your user name"
                  status={error.user ? 'error' : ''}
                />
                {error.user && <Text className="errorText">{error.user}</Text>}
              </div>
              <div className="inputContent">
                <Text strong>Company Name</Text>
                <Input
                  type={'text'}
                  id="company"
                  value={data.company}
                  onChange={(evt) => handleText(evt.target)}
                  placeholder="Enter your company name"
                  status={error.company ? 'error' : ''}
                />
                {error.company && (
                  <Text className="errorText">{error.company}</Text>
                )}
              </div>
              <div className="inputContent">
                <Text strong>Select an address</Text>
                <Input.Group
                  compact
                  name="address"
                  id="address"
                  value={data.address}
                >
                  <Select
                    onChange={handleSelect}
                    status={error.addresss ? 'error' : ''}
                  >
                    <Option value="Company 1">Company 1</Option>
                    <Option value="Company 2">Company 2</Option>
                  </Select>
                  <Cascader
                    onChange={handleSelect}
                    options={options}
                    placeholder="Select an address"
                    status={error.addresss ? 'error' : ''}
                  />
                </Input.Group>
                {error.addresss && (
                  <Text className="errorText">{error.addresss}</Text>
                )}
              </div>
              <div className="inputContent">
                <Text strong>Description</Text>
                <TextArea
                  rows={4}
                  id="description"
                  placeholder="Insert a description"
                  value={data.description}
                  onChange={(evt) => handleText(evt.target)}
                  status={error.description ? 'error' : ''}
                />
                {error.description && (
                  <Text className="errorText">{error.description}</Text>
                )}
              </div>
            </div>
          </Col>
          <Col md={12} span={24}>
            <div className="FormConten2">
              <div className="inputContent">
                <Text strong>Email</Text>
                <Input
                  type={'text'}
                  id="email"
                  value={data.email}
                  placeholder="Enter your email"
                  onChange={(evt) => handleText(evt.target)}
                  status={error.email ? 'error' : ''}
                />
                {error.email && (
                  <Text className="errorText">{error.email}</Text>
                )}
              </div>
              <div className="inputContent">
                <Text strong>Area Code</Text>
                <Input
                  placeholder="Insert your Area Code"
                  id="areaCode"
                  value={data.areaCode}
                  onChange={(evt) => handleText(evt.target)}
                  status={error.areaCode ? 'error' : ''}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  suffix={
                    <Tooltip title="Area Code">
                      <InfoCircleOutlined className="iconCircle" />
                    </Tooltip>
                  }
                />
                {error.areaCode && (
                  <Text className="errorText">{error.areaCode}</Text>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer className="footerHome">
        <div className="buttonContent">
          <Button className="buttonHome" onClick={clearInput}>
            Cancel
          </Button>

          <Button className="buttonHome" type="primary" onClick={handleCreate}>
            Create
          </Button>
        </div>
        <div className="roundedButton">
          <Tooltip title="Create">
            <Button
              shape="circle"
              icon={<UserAddOutlined />}
              size="large"
              onClick={handleCreate}
            />
          </Tooltip>
          <Tooltip title="Cancel">
            <Button
              shape="circle"
              icon={<CloseOutlined />}
              size="large"
              onClick={clearInput}
            />
          </Tooltip>
        </div>
      </Footer>
    </Layout>
  );
}
