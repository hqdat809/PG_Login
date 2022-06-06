import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import './LoginPage.css';
import logo from '../../../logo-420-x-108.png';
import { ILoginParams, ILoginValidation } from '../../../models/auth';
import { handleLoginApi } from '../../../service/userService';
import { handleLogin } from '../../../redux/actions/userActions';
import { getErrorMessageResponse } from '../../../utils';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onLogin = async (values: ILoginParams) => {
    let res = await handleLoginApi(values.email, values.password);
    console.log(res);

    if (res && !res.error) {
      // chuyen huong den trang home khi login thanh cong
    }

    if (res.error) {
      setErrorMessage(res.message);
    }
  };

  return (
    <div>
      <div className="wrapper-login-page">
        <img src={logo} alt="" style={{ marginBottom: '15px' }} />
        <LoginForm onLogin={onLogin} loading={loading} errorMessage={errorMessage} />
      </div>
    </div>
  );
};

export default LoginPage;
