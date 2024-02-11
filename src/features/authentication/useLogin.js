// React query
import { useMutation } from '@tanstack/react-query';

// React router
import { useNavigate } from 'react-router-dom';

// React toast
import toast from 'react-hot-toast';

// Services
import { login as loginApi } from '../../services/apiAuth';

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate('/dashboard');
    },
    onError: (err) => {
      console.log('ERROR: ', err);
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}
