// React query
import { useMutation, useQueryClient } from '@tanstack/react-query';

// Services
import { createEditCabin } from '../../services/apiCabins';

// React hot toast
import toast from 'react-hot-toast';

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created.');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
