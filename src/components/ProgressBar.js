import React from 'react';

export default ({ className, step, max }) =>
  <div className='progress-bar-container relative vspace'>
    <div className='progress-bar-text'>Step {step}/{max}</div>
    <div className={'progress-bar ' + className }>
      {Array(+max).fill(0).map((x,i) =>
        <div key={i} className={'progress-bar-step ' + (+step > i ? 'active' : '')} style={{ width: (100/max) + '%' }}></div>
      )}
    </div>
  </div>
