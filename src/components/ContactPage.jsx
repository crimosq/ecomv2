import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isValidPhone = phone => {
    const re = /^\+?[0-9]{3}-?[0-9]{3}-?[0-9]{4,6}$/;
    return re.test(phone);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let isValid = true;

    if (name === 'email') {
      isValid = isValidEmail(value);
    } else if (name === 'phone') {
      isValid = isValidPhone(value);
    } else {
      isValid = value.trim() !== '';
    }

    setFormErrors(prevState => ({
      ...prevState,
      [name]: !isValid
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    let isFormValid = true;
    Object.keys(formData).forEach(key => {
      validateInput(key, formData[key]);
      if (!formData[key]) isFormValid = false;
    });

    if (isFormValid) {
      console.log('Form Submitted', formData);
      // Form submission logic goes here
    }
  };

  return (
    <>
      <div className='contact-banner'>
        <div className='banner-content'>
          <div className='text-container'>
             
            <p> <h2>Contact Us</h2>
            <br/>Want to talk watches? Our team of customer service specialists and watch experts can help at any step.</p>
          </div>
          <div className='image-container'>
            <img src='/images/contact-hero.png' alt='contact' />
          </div>
        </div>
      </div>

      <div className="container-contact">
        <form name="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="First and Last Name" value={formData.name} onChange={handleChange} />
            {formErrors.name && <div className="error">Name is required</div>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="youremail@example.com" value={formData.email} onChange={handleChange} />
            {formErrors.email && <div className="error">Email is invalid</div>}
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            {formErrors.phone && <div className="error">Phone is invalid</div>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            {formErrors.message && <div className="error">Message is required</div>}
          </div>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
