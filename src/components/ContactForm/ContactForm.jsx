import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  // 1. Single state object for form fields
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', or 'success'

  // 2. Handle changes for all input fields
  function handleChange(event) {
    const { name, value } = event.target;
    setFields(prev => ({ ...prev, [name]: value }));
  }

  // 3. Handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
  }

  // Success state render
  if (status === 'success') {
    return <div className='success-msg'>✅ Message sent! I will reply soon.</div>;
  }

  // Main form render
  return (
    <div>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div className="form-group">
          <label>Name</label>
          <input
            name='name'
            type='text'
            required
            value={fields.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name='email'
            type='email'
            required
            value={fields.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name='message'
            rows='5'
            required
            value={fields.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn btn-primary"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message 🚀'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;