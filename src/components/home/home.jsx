import { React, useState } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import {
  Layout,
  Button,
  Typography,
  Input,
  Select,
  DatePicker,
  Switch,
  Row,
  Col,
  Tooltip,
} from 'antd';
import { UserAddOutlined, CloseOutlined } from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

export default function HomePage1() {
  const [data, setData] = useState({
    user: '',
    surname: '',
    relation: '',
    gender: '',
    docNumber: '',
  });
  const [error, setError] = useState({
    user: '',
    surname: '',
    relation: '',
    gender: '',
    docNumber: '',
  });
  const navigate = useNavigate();
  const handleSubmitContact = () => {
    navigate('/contacts');
  };
  const handleSubmitProfile = () => {
    navigate('/profile');
  };
  const handleCreate = () => {
    let error = {
      user: '',
      surname: '',
      relation: '',
      gender: '',
      docNumber: '',
    };
    if (data.user === '') {
      error.user = 'Fill the empty field';
    }
    if (data.surname === '') {
      error.surname = 'Fill the empty field';
    }
    if (data.relation === '') {
      error.relation = 'Fill the empty field';
    }
    if (data.gender === '') {
      error.gender = 'Fill the empty field';
    }
    if (data.docNumber === '') {
      error.docNumber = 'Fill the empty field';
    }
    if (error) {
      setError(error);
    } else {
      setError(false);
    }
  };
  const clearInput = () => {
    setError(false);
  };
  const handleText = (evt) => {
    setData((prevState) => ({ ...prevState, ...{ [evt.id]: evt.value } }));
  };
  return (
    <Layout>
      <Header className="headerHome">
        <div>
          <Title className="welcome" level={1}>
            Welcome
          </Title>
          <Text className="textHome">
            Add your friends or family as contacts so you can make a booking of
            them easily too.
          </Text>
        </div>
      </Header>

      <Content className="contentHome">
        <Row className="row1">
          <Col md={12} span={24}>
            <div className="FormConten1">
              <div className="inputContent">
                <Text strong>First Name</Text>
                <Input
                  type={'text'}
                  id="user"
                  value={data.user}
                  onChange={(evt) => handleText(evt.target)}
                  status={error.user ? 'error' : ''}
                />
                {error.user && <Text className="errorText">{error.user}</Text>}
              </div>
              <div className="inputContent">
                <Text strong>Surname</Text>
                <Input
                  id="surname"
                  value={data.surname}
                  onChange={(evt) => handleText(evt.target)}
                  status={error.surname ? 'error' : ''}
                  type={'text'}
                />
                {error.surname && (
                  <Text className="errorText">{error.surname}</Text>
                )}
              </div>
              <div className="inputContent">
                <Text strong>Relation</Text>
                <Input
                  id="relation"
                  value={data.relation}
                  onChange={(evt) => handleText(evt.target)}
                  status={error.relation ? 'error' : ''}
                  type={'text'}
                />
                {error.relation && (
                  <Text className="errorText">{error.relation}</Text>
                )}
              </div>
              <div className="inputContent">
                <Text strong>Gender</Text>

                <Select
                  className="selectHome"
                  placeholder="Please choose"
                  id="gender"
                  value={data.gender}
                  onSelect={(evt) => handleText(evt.target)}
                  status={error.gender ? 'error' : ''}
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>
              </div>
            </div>
          </Col>

          <Col md={12} span={24}>
            <div className="FormConten2">
              <div className="inputContent">
                <Text strong>Type of Document</Text>
                <Select className="selectHome" placeholder="Please choose">
                  <Option value="Pasport">Pasport</Option>
                  <Option value="ID">ID</Option>
                </Select>
              </div>
              <div className="inputContent">
                <Text strong>ID Issuing Country</Text>

                <Select className="selectHome" placeholder="Please choose">
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                </Select>
              </div>
              <div className="inputContent">
                <Text strong>Document Number</Text>
                <Input
                  type={'text'}
                  id="docNumber"
                  value={data.docNumber}
                  onChange={(evt) => handleText(evt.target)}
                  status={error.docNumber ? 'error' : ''}
                />
                {error.docNumber && (
                  <Text className="errorText">{error.docNumber}</Text>
                )}
              </div>
              <div className="inputContent">
                <Text strong>Date of birth</Text>

                <DatePicker className="dateHome"></DatePicker>
              </div>
              <div className="contentSwitch">
                <Text strong>Use my Phone Number</Text>{' '}
                <Switch className="switchPhone" defaultChecked />
              </div>
              <div className="contentSwitch">
                <Text strong>Use my Email Address</Text>{' '}
                <Switch className="switchEmail" defaultChecked />
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
