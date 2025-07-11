import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const useUserState = () => {
  const [userState, setUserState] = useState(null);
  const userData = useSelector((state) => state.user, shallowEqual);

  useEffect(() => {
    setUserState(userData);
  }, [userData]);

  return userState;
};

export default useUserState;
