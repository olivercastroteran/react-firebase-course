import { useState } from 'react';
import { useAuthContext } from '../hooks';
// Firebase imports
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, name) => {
    setError(null);
    setIsPending(true);

    try {
      // signup user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error('Could not complete signup!');
      }

      // add display name to user
      await updateProfile(auth.currentUser, { displayName: name });

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signup, isPending, error };
};

export default useSignup;
