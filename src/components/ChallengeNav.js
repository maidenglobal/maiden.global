import React from 'react';
import { Link } from 'react-router-dom';

export const max = 6

export default ({ step }) =>
  <div className='vspace'>
    <Link className='button small' to='/challenge'>&lt;&lt;</Link>
    <Link className='button' to={'/challenge' + (+step > 1 ? +step-1 : '')}>Prev</Link>
    { +step < +max
      ? <Link className='button' to={'/challenge' + (+step+1)}>Next</Link>
      : <div className='button active'>Next</div>
    }
  </div>
