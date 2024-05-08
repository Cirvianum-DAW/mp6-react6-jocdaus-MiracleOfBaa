import React from 'react';
import './Dau.css';

function Dau({ val }) {
  return <div className={`Dau Dau--${val}`}>{val}</div>;
}

export default Dau;
