import React, { useState } from 'react';
import './App.css';
import { EventsList, Modal, Title } from './components';

function App() {
  const [showModal, setShowModal] = useState(false);
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

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = 'All the latest events in mario kingdom';

  return (
    <div className="App">
      <Title title="Mario Kingdom Events" subtitle={subtitle} />

      <div>
        {showEvents ? (
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        ) : (
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        )}
      </div>

      {showEvents && <EventsList events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ab
            maiores ad omnis fuga obcaecati necessitatibus quod esse optio vel
            maiores ad omnis fuga obcaecati necessitatibus quod esse.
          </p>
        </Modal>
      )}

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>
    </div>
  );
}

export default App;
