import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const sortList = [
                      {name:'популярністю по-спаданню ↓', sort:'rating'}, 
                      {name:'популярністю по-зростанню ↑', sort:'-rating'}, 
                      {name:'ціною від дорожчої до дешевшої', sort: 'price'}, 
                      {name:'ціною від дешевшої до дорожчої', sort: '-price'}, 
                      {name:'алфавітом від (я - а)', sort: "name"},
                      {name:'алфавітом від (а - я)', sort: "-name"}
];


function Sort ({setActiveSort}) {
  const [showSortPopup, setShowSortPopup] = React.useState(false);

  const sortRef = React.useRef()
  
  const dispatch = useDispatch();
  const activeSort = useSelector(state => state.filter.sortBy);

  const changePopup = () => {
    setShowSortPopup(!showSortPopup);     
  }  

  React.useEffect(() => {
    const hideSortOutSide = (event) => {
        if ( !event.path.includes(sortRef.current)) {
          setShowSortPopup(false)
        }
      }
      document.body.addEventListener('click', hideSortOutSide);      

      return () => {
        document.body.removeEventListener('click', hideSortOutSide);
      }
    }, []) 
  
    return (
        <div className="sort"
            ref={sortRef}
            onClick={() => changePopup()}
        >
          <div className="sort__label">
            <svg 
              className={showSortPopup ? 'turn' : ''}
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
              />
            </svg>
            <b>Сортування за:</b>
            <span>{activeSort.name}</span>
          </div>
          {showSortPopup && <div className="sort__popup">
            <ul>
              {sortList.map((obj, index) => (
                  <li key={index}
                      onClick={() => dispatch(setActiveSort(obj))}
                      className={activeSort.name === obj.name ? "active" :''}                          
                      >{obj.name}</li>
                ))}
            </ul>
          </div>}
        </div>
    )
}
export default Sort;