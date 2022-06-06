import actionTypes from './actionTypes';
import { handleLoginApi } from '../../service/userService';

export const handleLogin = (email: string, password: string) => {
  return async (dispatch: void, getState: any) => {
    try {
      let res = await handleLoginApi(email, password);
      console.log(res.code);
    } catch (error) {
      console.log(error);
    }
  };
};
