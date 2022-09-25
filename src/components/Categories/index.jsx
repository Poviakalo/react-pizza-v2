import React from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { useDispatch } from 'react-redux';




function Categories ({items, activeClass, setActiveCategory}) { 
  
  const dispatch = useDispatch();

  const changeCategory = (index) => {
    dispatch(setActiveCategory(index))
  }
    return (
        <div className="categories">
          <input type="checkbox" id="categories" className="categories__input" />
          <label htmlFor="categories" className="categories__burger">
            <Hamburger />
          </label>
            <ul>
              {
                items.map((item, index) => <li key={index} onClick={() => changeCategory(index)} className={ activeClass === index ? "active" : ''}>{item}</li>)
              }
            </ul>
          </div>
    )
}

export default Categories;