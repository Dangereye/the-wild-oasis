// React query
import { useQuery } from '@tanstack/react-query';

// React router
import { useSearchParams } from 'react-router-dom';

// DateFns
import { subDays } from 'date-fns';

// Services
import { getStaysAfterDate } from '../../services/apiBookings';

export function useRecentStayss() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));
  const queryDate = subDays(new Date(), numDays).toISOString();
  const {
    data: stays,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['stays', `last-${numDays}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });

  const confirmedStays = stays?.filter(
    (stay) => stay.status === 'checked-in' || stay.status === 'checked-out'
  );

  return { stays, isLoading, error, confirmedStays };
}
