// React query
import { useMutation, useQueryClient } from '@tanstack/react-query';

// React router
import { useNavigate } from 'react-router-dom';

// React toast
import toast from 'react-hot-toast';

// Services
import { updateBooking } from '../../services/apiBookings';

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: IsCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: 'checked-in',
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate('/');
    },
    onError: () => toast.error('There was an error while checkin in'),
  });

  return { checkin, IsCheckingIn };
}
