/* https://www.npmjs.com/package/react-infinite-scroll-component */
/* https://codesandbox.io/s/yk7637p62z?file=/src/index.js */
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import shallow from 'zustand/shallow';
import useNewsStore from '../zustand/news-store';
import Card from './Card';
import { useMediaPredicate } from "react-media-hook";
import devices from '../theme/breakoints';

const LoadingText = styled.h4`
  text-align: center;
  padding: .5rem;
  font-family: ${({ theme }) => theme.fonts.family.roboto.medium};
  font-size: ${({ theme }) => theme.fonts.size.gray};
  color: ${({ theme }) => theme.colors.gray};
`;

function InfiniteScrolling(props) {
  const biggerThanMd = useMediaPredicate(`${devices.mediumLaptop}`);

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
        height={biggerThanMd ? 400 : 1000}
      >
        <div className='cards-container'>
          {/*Se mapea el array con la información de la api para contruir las cards con la info*/
            news.map(({ author, story_title, story_url, created_at, created_at_i, story_id }) =>
              <Card author={author}
                storyTitle={story_title}
                storyUrl={story_url}
                createdAt={created_at}
                key={`${created_at_i}-${story_id}`}
                createdId={created_at_i}
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