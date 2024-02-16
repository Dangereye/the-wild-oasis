// React query
import { useQuery } from '@tanstack/react-query';

// React router
import { useSearchParams } from 'react-router-dom';

// DateFns
import { subDays } from 'date-fns';

// Services
import { getBookingsAfterDate } from '../../services/apiBookings';

export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));
  const queryDate = subDays(new Date(), numDays).toISOString();
  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['bookings', `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { bookings, isLoading, error };
}
