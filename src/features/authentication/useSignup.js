// React query
import { useMutation } from '@tanstack/react-query';

// React toast
import toast from 'react-hot-toast';

// Services
import { signup as signupApi } from '../../services/apiAuth';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        'Account successfully created. An email has been sent, please verify your account.'
      );
    },
  });

  return { signup, isLoading };
}
