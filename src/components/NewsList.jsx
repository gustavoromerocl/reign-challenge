import React from 'react'
import styled from 'styled-components';
import Card from './Card';

function NewsList({data, className, heart}) {
  return (
    <div className={`cards-container ${className}`}>
      {/*Se mapea el array con la información de la api para contruir las cards con la info*/
      
        data.map(({ author, story_title, story_url, created_at, created_at_i}) =>
          <Card author={author} 
            storyTitle={story_title} 
            storyUrl={story_url} 
            createdAt={created_at} 
            key={created_at_i.toString()} 
            createdId={created_at_i}
            heart={heart}
            />)
      }
    </div>
  )
}

export default styled(NewsList)`
  &.cards-container{
    display: flex;
    flex-wrap: wrap;
  }
`;