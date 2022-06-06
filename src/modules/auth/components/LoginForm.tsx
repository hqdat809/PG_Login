import React, { useState } from 'react';
import { validateLocaleAndSetLanguage } from 'typescript';
import { ILoginParams, ILoginValidation } from '../../../models/auth';
import { validateLogin, validLogin } from '../utils';

interface Props {
  onLogin(values: ILoginParams): void;
  loading: boolean;
  errorMessage: string;
}

const LoginForm = (props: Props) => {
  const { onLogin, loading, errorMessage } = props;

  const [formValues, setFormValues] = useState<ILoginParams>({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [validate, setValidate] = useState<ILoginValidation>();

  const onSubmit = () => {
    const dataValidate = validateLogin(formValues);

    setValidate(dataValidate);

    if (!validLogin(dataValidate)) {
      return;
    }

    onLogin(formValues);
  };

  //   console.log(formValues);

  return (
    <form
      style={{ maxWidth: '560px', width: '100%' }}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="row g-3 needs-validation"
    >
      {!!errorMessage && (
        <div className="alert alert-danger" role="alert" style={{ width: '100%' }}>
          {errorMessage}
        </div>
      )}
      <div className="col-md-12">
        <label htmlFor="inputEmail" className="form-label">
          Địa chỉ Email
        </label>
        <input
          type="text"
          className="form-control"
          id="inputEmail"
          onChange={(e) => {
            setFormValues({ ...formValues, email: e.target.value });
          }}
        />
        {!!validate?.email && <small className="text-danger">{validate.email}</small>}
      </div>
      <div className="col-md-12">
        <label htmlFor="inputPassword" className="form-label">
          Mật khẩu
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          onChange={(e) => {
            setFormValues({ ...formValues, password: e.target.value });
          }}
        />
        {!!validate?.password && <small className="text-danger">{validate.password}</small>}
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="invalidCheck"
            value=""
            onChange={(e) => {
              setFormValues({ ...formValues, rememberMe: e.target.checked });
            }}
          />
          <label className="form-check-label" htmlFor="invalidCheck">
            Lưu mật khẩu
          </label>
        </div>
      </div>
      <div className="row justify-content-md-center" style={{ margin: '16px 0' }}>
        <div className="col-md-auto">
          <button
            className="btn btn-primary"
            type="submit"
            style={{
              minWidth: '160px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
