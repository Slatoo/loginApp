import React, { useState } from 'react';
import './styles.css';
import 'antd/dist/antd.css';
import { Button, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [data, setData] = useState({ user: '', password: '' });
  const [error, setError] = useState({ user: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userCorrect = 'jose@gmail.com';
  const passwordCorrect = '123';

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(function () {
      let error = { user: '', password: '' };

      const regex =
        /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if (!regex.test(data.user)) {
        error.user = 'Invalid email address';
      } else if (data.user !== userCorrect) {
        error.user = 'Wrong Username';
      }
      if (data.password.length > 7) {
        error.password = 'Too many characters';
      } else if (data.password !== passwordCorrect) {
        error.password = 'Wrong Pasword';
      }
      if (error.user || error.password) {
        setError(error);
      } else {
        navigate('/home');
      }

      setLoading(false);
    }, 3000);
  };

  const handleText = (evt) => {
    setData((prevState) => ({ ...prevState, ...{ [evt.id]: evt.value } }));
  };

  const { Password } = Input;
  const { Title, Text, Link } = Typography;

  return (
    <section className="contentLogin">
      <div>
        <Title strong level={1} className="title">
          Log in
        </Title>
        <Text className="spam">
          Please sign in to yor account.
          <br></br>
          Don't have account yet?{' '}
          <Link strong href="" target="_blank">
            Create an account
          </Link>
        </Text>

        <form className="inputLogin">
          <div className="userContent">
            <Text className="usernameText" type="secondary" htmlFor="username">
              Username:
            </Text>

            <Input
              status={error.user ? 'error' : ''}
              size="large"
              type="text"
              id="user"
              placeholder="Enter your user name"
              onChange={(evt) => handleText(evt.target)}
              value={data.user}
              required
            />
            {error.user && <Text className="errorText">{error.user}</Text>}
          </div>
          <div className="passwordContent">
            <Text className="password" type="secondary" htmlFor="password">
              Password:
            </Text>

            <Password
              status={error.password ? 'error' : ''}
              placeholder="Enter your password"
              id="password"
              onChange={(evt) => handleText(evt.target)}
              value={data.password}
              required
            />
            {error.password && (
              <Text className="errorPassword">Wrong Password</Text>
            )}

            <Link strong className="forgotPass" href="" target="_blank">
              Forgot Password?
            </Link>
          </div>
          <Button
            type="primary"
            size="large"
            className="buttonAnt"
            loading={loading ? loading : ''}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </form>
      </div>
    </section>
  );
}
