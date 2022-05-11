import { useState } from 'react';
import './NewEventForm.css';

const NewEventForm = ({ addNewEvent }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
  });

  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      location: 'manchester',
    });
  };

  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewEvent({ ...formData, id: Math.floor(Math.random() * 1000) });
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="title"
          value={formData.title}
        />
      </label>
      <label>
        <span>Event Date</span>
        <input
          type="date"
          onChange={handleChange}
          name="date"
          value={formData.date}
        />
      </label>
      <label>
        <samp>
          <span>Event Location</span>
          <select
            name="location"
            onChange={handleChange}
            value={formData.location}
          >
            <option value="manchester">Manchester</option>
            <option value="london">London</option>
            <option value="cardiff">Cardiff</option>
          </select>
        </samp>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default NewEventForm;
