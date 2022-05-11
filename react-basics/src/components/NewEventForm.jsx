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
    console.log('Submited', formData);
    addNewEvent({ ...formData, id: Math.floor(Math.random() * 100) });
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
      <button>Submit</button>
      <p>
        title - {formData.title}, date - {formData.date}
      </p>
      <p onClick={resetForm}>Reset Form</p>
    </form>
  );
};

export default NewEventForm;
