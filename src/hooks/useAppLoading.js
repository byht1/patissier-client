import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { current } from 'api/auth';
import { register } from 'redux/auth';

export const useAppLoading = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, isSuccess } = useQuery({
    queryFn: async () => {
      const data = await current();
      return data || true;
    },
    queryKey: ['user'],
    onSuccess: data => {
      if (typeof data === 'boolean') {
        return;
      }
      dispatch(register(data));
    },
    onError: error => console.error(error.response.data.message),
    retry: 1,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return { isLoading, isError, isSuccess };
};
