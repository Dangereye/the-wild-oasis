// React query
import { useMutation, useQueryClient } from '@tanstack/react-query';

// React toast
import toast from 'react-hot-toast';

// Services
import { updateBooking } from '../../services/apiBookings';

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: IsCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-out',
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error('There was an error while checkin out'),
  });

  return { checkout, IsCheckingOut };
}
