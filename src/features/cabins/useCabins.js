// React query
import { useQuery } from '@tanstack/react-query';

// Services
import { getCabins } from '../../services/apiCabins';

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({ queryKey: ['cabins'], queryFn: getCabins });

  return { isLoading, error, cabins };
}
