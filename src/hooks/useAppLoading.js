import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { current } from 'api/auth';
import { register } from 'redux/auth';

export const useAppLoading = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, isSuccess } = useQuery({
    queryFn: () => {
      return current();
    },
    queryKey: ['user'],
    onSuccess: data => {
      if (!data) {
        return navigate('/');
      }

      dispatch(register(data));
      return navigate('/');
    },
    onError: error => console.error(error.response.data.message),
    retry: 1,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, isSuccess };
};
