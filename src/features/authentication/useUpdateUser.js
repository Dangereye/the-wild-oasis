// React query
import { useMutation, useQueryClient } from '@tanstack/react-query';

// React hot toast
import toast from 'react-hot-toast';

// Services
import { updateCurrentUser } from '../../services/apiAuth';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success('User account successfully updated');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateUser };
}
