// import { useCallback, useEffect, useState } from 'react';
import { useState } from 'react';
import { useFetch } from '../hooks';

import './TripList.css';

const TripList = () => {
  const [url, setUrl] = useState('http://localhost:3000/trips');
  const { data: trips, isPending, error } = useFetch(url);

  // console.log(trips);

  // const fetchTrips = useCallback(async () => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setTrips(data);
  // }, [url]);

  // useEffect(() => {
  //   fetchTrips();
  // }, [fetchTrips]);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {trips?.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button
          onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}
        >
          European Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
          All Trips
        </button>
      </div>
    </div>
  );
};

export default TripList;
