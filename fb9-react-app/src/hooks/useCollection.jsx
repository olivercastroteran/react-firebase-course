import { useEffect, useRef, useState } from 'react';
import { db } from '../firebase/config';
// firebase imports
import { collection, onSnapshot, query, where } from 'firebase/firestore';

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // set up query
  const q = useRef(_q).current;

  useEffect(() => {
    setIsPending(true);
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q));
    }

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
  }, [c, q]);

  return { documents, isPending, error };
};
