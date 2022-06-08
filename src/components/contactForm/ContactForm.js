import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleMailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        value={name} 
        placeholder='Contact name' 
        onChange={handleNameChange} 
        required 
      />
      <input 
        type='tel' 
        value={phone} 
        placeholder='Contact phone in format 123-456-7890' 
        onChange={handlePhoneChange} 
        pattern='^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$' 
        required 
      />
      <input 
        type='email' 
        value={email} 
        placeholder='Contact e-mail' 
        onChange={handleMailChange} 
        required 
      />
      <input type='submit' />
    </form>
  );
};
