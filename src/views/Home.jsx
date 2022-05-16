import React, { useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Spinner from '../components/Spinner';
/* Importamos la store de zustand */
import useNewsStore from '../zustand/news-store';
import shallow from "zustand/shallow";
import Dropdown from '../components/Dropdown';

function Home(props) {
  const {
    fetchNews,
    isFetchingNews,
    fetchNewsError,
    news,
    page,
    filter
  } = useNewsStore((state) => ({
    /**Les asignamos a las variables creadas el state de la store de zustand */
    fetchNews: state.fetchNews,
    isFetchingNews: state.isFetchingNews,
    fetchNewsError: state.fetchNewsError,
    news: state.news,
    page: state.page,
    filter: state.filter,
  }), shallow)


  /**Ejecuta la función fetchResult cuando se crea el componente */
  useEffect(() => {
    fetchNews();
    console.log("Me estoy ejecutando en Home");
  }, [page, filter]);

  return (
    <div className={`home-container ${props.className}`}>
      <div className='cards-container'>
        <Dropdown />
        {isFetchingNews && <Spinner />}
        {/*Se mapea el array con la información de la api para contruir las cards con la info*/
          
          news.map(({ author, story_title, story_url, created_at, created_at_i }) =>
            <Card author={author} storyTitle={story_title} storyUrl={story_url} createdAt={created_at} key={created_at_i.toString()} />)
        }
        {fetchNewsError && <div>Error 404 Not found</div>}
        {/*   */}

      </div>
    </div>
  )
}

export default styled(Home)`
  &.home-container{

    .cards-container{
      display: flex;
      flex-wrap: wrap;
    }
  }
`;