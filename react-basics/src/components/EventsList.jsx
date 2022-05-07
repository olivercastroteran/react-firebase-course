import React from 'react';

const EventsList = ({ events, handleClick }) => {
  return events.map((event, i) => (
    <React.Fragment key={event.id}>
      <h2>
        {i} - {event.title}
      </h2>
      <button onClick={() => handleClick(event.id)}>Delete</button>
    </React.Fragment>
  ));
};

export default EventsList;
