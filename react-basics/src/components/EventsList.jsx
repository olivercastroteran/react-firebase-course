import React from 'react';
import styles from './EventsList.module.css';

const EventsList = ({ events, handleClick }) => {
  return (
    <div>
      {events?.map((event, i) => (
        <div className={styles.card} key={event.id}>
          <h2>
            {i} - {event.title}
          </h2>
          <p>
            {event.location} - {event.date}
          </p>
          <button onClick={() => handleClick(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
