import React from 'react';
import styles from './search.module.scss';
import { SearchContext } from '../../App';
// import debounce  from 'lodash.debounce';



function Search() {
  const { search, setSearch } = React.useContext(SearchContext);
  const inputRef = React.useRef();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const testDebounce = React.useCallback(  debounce(() => {
  //     console.log('Hello')
  //   }, 1000),
  //  [],
  // );

  const onChangeInput = (event) => {
    setSearch(event.target.value);
    // testDebounce();
  }
  
  
  const onClickClear = () => {
    setSearch('');
    inputRef.current.focus();
  }
  return (
    <div className={styles.search}>
      <input 
        ref={inputRef}
        className={styles.input} 
        type="text" 
        placeholder='Введіть назву піци для пошуку'
        onChange={onChangeInput}
        value={search}
      />
      {search && (
        <svg className={styles.close} 
              onClick={onClickClear}
              xmlns="http://www.w3.org/2000/svg" 
              fill="#000000" 
              viewBox="0 0 24 24"
              width="20px" 
              height="20px"
            >
             <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"/></svg>
      )}
      </div>
    
  )
}

export default Search;