/* https://www.npmjs.com/package/react-infinite-scroll-component */
/* https://codesandbox.io/s/yk7637p62z?file=/src/index.js */
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import shallow from 'zustand/shallow';
import useNewsStore from '../zustand/news-store';
import Card from './Card';

const LoadingText = styled.h4`
  text-align: center;
  padding: .5rem;
  font-family: ${({ theme }) => theme.fonts.family.roboto.medium};
  font-size: ${({ theme }) => theme.fonts.size.gray};
  color: ${({ theme }) => theme.colors.gray};
`;

function InfiniteScrolling(props) {

  /* Zustand */
  const {
    page,
    setPage,
    news,
  } = useNewsStore((state) => ({
    /**Les asignamos a las variables creadas el state de la store de zustand */
    page: state.page,
    setPage: state.setPage,
    news: state.news
  }), shallow)

  // Actualizamos la store y concatenamos la nueva pagína usando react-infinite-scroll-component
  const fetchMoreData = async () => {
    //console.log(news);
    setPage(page + 1);
  }

  return (
    <div className={props.className}>
      <InfiniteScroll
        dataLength={news.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<LoadingText>Loading more...</LoadingText>}
        height={500}
      >
        <div className='cards-container'>
          {/*Se mapea el array con la información de la api para contruir las cards con la info*/
            news.map((el, index) =>
              <Card author={el.author}
                storyTitle={el.story_title}
                storyUrl={el.story_url}
                createdAt={el.created_at}
                //Se interpola id_sptory con el index ya que genera conflicto con algunos elementos de el endpoint de vuejs
                key={`${el.story_id}-${index}`}
                createdId={el.created_at_i}
              />)
          }
        </div>

      </InfiniteScroll>
    </div>
  )
}

export default styled(InfiniteScrolling)`
  .cards-container {
    display: flex;
    flex-wrap: wrap;
  }
`;