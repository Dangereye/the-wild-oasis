// React query
import { useQuery } from '@tanstack/react-query';

// React router
import { useParams } from 'react-router-dom';

// Services
import { getBooking } from '../../services/apiBookings';

export function useBooking() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking(bookingId),
  });

  return { isLoading, error, booking };
}
