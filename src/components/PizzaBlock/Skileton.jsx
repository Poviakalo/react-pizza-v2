import React from 'react';

function Skileton() {
  return (
    <div className='skileton'>
        <div className="skileton__circle"></div>
        <div className="skileton__title"></div>
        <div className="skileton__content"></div>
        <div className="skileton__bottom">
            <div className="skileton__bottom-price"></div>
            <div className="skileton__bottom-button"></div>
        </div>
    </div>
  )
}

export default Skileton