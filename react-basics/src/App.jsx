import { useState } from 'react';
import './App.css';

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "marios's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => event.id !== id);
    });
  };

  return (
    <div className="App">
      <div>
        {showEvents ? (
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        ) : (
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        )}
      </div>
      {showEvents &&
        events.map((event, i) => (
          <div key={event.id}>
            <h2>
              {i} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default App;
