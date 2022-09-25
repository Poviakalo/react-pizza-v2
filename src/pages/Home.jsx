import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import Sort, { sortList } from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skileton from '../components/PizzaBlock/Skileton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { setActiveCategory, setActivePage, setActiveSort, setFilters } from '../redux/slices/filterSlice';
import { setItems } from '../redux/slices/pizzaSlice'

export const ItemContext = React.createContext();


function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryId = useSelector(state => state.filter.categoryId);
  const activeSort = useSelector(state => state.filter.sortBy);
  const activePage = useSelector(state => state.filter.activePage);  
  const pizzas = useSelector(state => state.pizzas.items);  

  // const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [firstLoading, setFirstLoading] = React.useState(false);
  // const [activeSort, setActiveSort] = React.useState({name:'популярністю по-спаданню ↓', sort:'rating'});
  // const [activeIndexCategory, setActiveIndexCategory] = React.useState(0);

  const { search } = React.useContext(SearchContext);

  React.useEffect(() => {    
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortParams = sortList.find(obj => obj.sort === params.sortBy);
      dispatch(
        setFilters({
          ...params,
          sortBy: sortParams
        })
      )
    }   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchPizzas = async () => {
    setIsLoading(true)
    const categoty = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = activeSort.sort.replace('-', '');
    const order = activeSort.sort.includes('-') ? 'asc' : 'desc';
    const searchValue = search ? `${search}` : '';


    // axios.get(`https://-62cec65e826a88972d02c7c6.mockapi.io/items?${categoty}&sortBy=${sortBy}&order=${order}&search=${searchValue}&page=${activePage}&limit=4`)
    //   .then(response => {
    //     setPizzas(response.data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) =>{
    //      setIsLoading(false);
    //      console.log(err, " AXIOS ERROR!!!")
    //     })

    
    try {
      const response = await axios.get(`https://62cec65e826a88972d02c7c6.mockapi.io/items?${categoty}&sortBy=${sortBy}&order=${order}&search=${searchValue}&page=${activePage}&limit=4`);
        dispatch(setItems(response.data));
        // setIsLoading(false);
    } catch (error) {
      // setIsLoading(false);
      console.log(error, ' error!!!!!!!!!!!!!!!');
    } finally {
      setIsLoading(false);
    }
        
      setFirstLoading(true);
      window.scroll(0, 0)
  }

  React.useEffect(() => {
    fetchPizzas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSort, categoryId, search, activePage]);

  React.useEffect(() => {
    if ( firstLoading ) {
      const queryString = qs.stringify({
        sortBy: activeSort.sort,
        categoryId,
        activePage
      });
    navigate(`?${queryString}`)
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSort, categoryId, activePage]);


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={["Всі", "М'ясні", "Вегетаріанська", "Гриль", "Гострі", "Закриті"]}
          activeClass={categoryId}
          setActiveCategory={setActiveCategory}
        />
        <Sort setActiveSort={setActiveSort} />
      </div>
      <h2 className="content__title">Всі піци</h2>
      <div className="content__items">
        {
          isLoading
            ? Array(12).fill(0).map((el, i) => <Skileton key={i} />)
            : pizzas.map((pizza) => (
                <PizzaBlock key={pizza.id} {...pizza} />
              ))
        }
      </div>
      <Pagination setActivePage={setActivePage} />
    </div>

  )
}

export default Home;