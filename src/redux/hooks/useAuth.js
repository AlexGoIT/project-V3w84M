import { useSelector } from 'react-redux';

import {
  selectUser,
  selectIsRefreshed,
  selectIsAuthorized,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const isRefreshing = useSelector(selectIsRefreshed);
  const user = useSelector(selectUser);

  return {
    isAuthorized,
    isRefreshing,
    user,
  };
};
