import React from 'react';
import { Link } from 'react-router-dom';
import imageEmptyCart from '../../assets/img/empty-cart.png'

function CartEmpty() {
  return (
    <div className="cart cart--empty">
        <h2>Кошик порожній <i>😕</i></h2>
        <p> Ймовірніше за все, ви не замовили ще піцу.<br />
            Для того, щоб замовити піцу, перейди на головну сторінку.
        </p>
        <img src={imageEmptyCart} alt="Empty cart" />
        <Link to="/react-pizza-v2" className="button button--black">
            <span>Повернутись назад</span>
        </Link>
    </div>
  )
}

export default CartEmpty;