// React query
import { useQuery } from '@tanstack/react-query';

// Services
import { getStaysTodayActivity } from '../../services/apiBookings';

export function useTodayActivity() {
  const {
    data: activities,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['todat-activity'],
    queryFn: getStaysTodayActivity,
  });

  return { activities, isLoading, error };
}
