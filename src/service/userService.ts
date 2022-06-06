import axios from '../axios';

interface ILoginReponse {
  code: BigInteger;
  error: boolean;
  data: object;
  message: string;
}

const handleLoginApi = (email: string, password: string): ILoginReponse => {
  return <ILoginReponse>(
    (<unknown>(
      axios.post('http://api.training.div3.pgtest.co/api/v1/auth/login', { email, password })
    ))
  );
};

export { handleLoginApi };
