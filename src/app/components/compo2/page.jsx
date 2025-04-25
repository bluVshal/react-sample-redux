'use client';

import React from 'react';
import { useSelector } from 'react-redux';

const Compo2 = () => {
    const message = useSelector( state => state.joke.value)

  return (
    <div>
       { message && <p style={{ marginTop: '1rem'}}>{ message }</p>}
    </div>
  )
}

export default Compo2;
