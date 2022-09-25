import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { useDispatch } from 'react-redux';

// import { setActivePage } from '../../redux/slices/filterSlice';



function Pagination({ setActivePage }) {
  const dispatch = useDispatch();
  return (
    <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => dispatch(setActivePage(event.selected + 1))}
        pageRangeDisplayed={3}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
  )
}

export default Pagination;