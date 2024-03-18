import React from 'react';
import ForConsumers from './ForConsumers';
import PersonalCabinet from './PersonalCabinet';
import ContactsCenter from './ContactCenter';
import About from './About';
import ContactIcons from './ContactIcons';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contacts">
      <div className="menu">
        <div className="call-menu">
          <ContactsCenter />
          <ContactIcons />
        </div>
        <div className="buyer-menu">
          <ForConsumers />
          <PersonalCabinet />
          <About />
        </div>
      </div>
      <div className="footer-contacts">
        <ul className="footer">
          <li>
            <a href="/">новинки</a>
          </li>
          <li>
            <a href="/">чоловіки</a>
          </li>
          <li>
            <a href="/">жінки</a>
          </li>
          <li>
            <a href="/">аксесуари</a>
          </li>
          <li>
            <a href="/">акції</a>
          </li>
        </ul>
        <div>
          <p>© 2022 - 2023 IGNAT. Усі права захищені</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
