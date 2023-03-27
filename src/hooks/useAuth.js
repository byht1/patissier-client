import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/auth';

export const useAuth = () => {
  const isLogin = useSelector(getIsLogin);

  return { isLogin };
};
