import React from 'react';

const PersonalCabinet = () => {
  return (
    <div className="info-list">
      {' '}
      <p>Особистий кабінет</p>
      <ul className="info">
        {' '}
        <li>
          <p>Мої дані </p>
        </li>
        <li>
          <p>Історія замовлень</p>
        </li>
        <li>
          <p>Улюблені</p>
        </li>
        <li>
          <p>Розсилки</p>
        </li>
      </ul>
    </div>
  );
};

export default PersonalCabinet;
