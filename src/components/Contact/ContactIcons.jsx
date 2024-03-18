import React from 'react';
import insta from '../../images/insta.svg';
import phone from '../../images/phone.svg';
import tg from '../../images/telegr.svg';
import './Contact.scss';

const ContactIcons = () => {
  return (
    <div className="info-list">
      <ul className="info contact-icons" style={{ gap: '20px' }}>
        <li>
          <img src={insta} alt="instagram" />
        </li>
        <li>
          <img src={phone} alt="phone" />
        </li>
        <li>
          <img src={tg} alt="telegram" />
        </li>
      </ul>
    </div>
  );
};

export default ContactIcons;
