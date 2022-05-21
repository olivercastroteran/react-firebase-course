import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
// firebase imports
import { collection, onSnapshot } from 'firebase/firestore';

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    let ref = collection(db, c);

    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setIsPending(false);
        setError(null);
      },
      (error) => {
        console.log(error);
        setIsPending(false);
        setError(error.message);
      }
    );

    return () => unsub();
  }, [c]);

  return { documents, isPending, error };
};
