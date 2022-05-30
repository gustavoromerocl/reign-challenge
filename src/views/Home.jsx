import React, { useEffect } from 'react';
import Spinner from '../components/Spinner';
/* Importamos la store de zustand */
import useNewsStore from '../zustand/news-store';
import shallow from "zustand/shallow";
import Dropdown from '../components/Dropdown';
import styled from 'styled-components';
import { CenterContainer } from '../theme';
import Filter from '../components/Filter';

import { useMediaPredicate } from "react-media-hook";
import devices from '../theme/breakoints';
import InfiniteScroll from '../components/InfiniteScroll';

function Home(props) {
  const biggerThanMd = useMediaPredicate(`${devices.mediumLaptop}`);

  const {
    fetchNews,
    isFetchingNews,
    fetchNewsError,
    news,
    filter,
  } = useNewsStore((state) => ({
    /**Les asignamos a las variables creadas el state de la store de zustand */
    fetchNews: state.fetchNews,
    isFetchingNews: state.isFetchingNews,
    fetchNewsError: state.fetchNewsError,
    news: state.news,
    page: state.page,
    filter: state.filter,
  }), shallow)


  /**Ejecuta la función fetchNews cuando se crea el componente */
  useEffect(() => {
    fetchNews();
  }, [filter, fetchNews]);

  return (
    <div className={props.className}>
        {biggerThanMd ? <Dropdown /> : <Filter />}
        
        {isFetchingNews ? <CenterContainer><Spinner /></CenterContainer> : <InfiniteScroll data={news}/>}
        {fetchNewsError && <div>Error 404 Not found</div>}
    </div>
  )
}

export default styled(Home)`
  height: 60vh;
  @media ${devices.mediumLaptop}{ height: 50vh; }
`;