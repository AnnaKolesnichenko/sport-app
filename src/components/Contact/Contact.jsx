import React from 'react';
import ForConsumers from './ForConsumers';
import PersonalCabinet from './PersonalCabinet';
import ContactsCenter from './ContactCenter';

const Contact = () => {
  return (
    <div>
      <ContactsCenter />
      <ForConsumers />
      <PersonalCabinet />
    </div>
  );
};

export default Contact;
