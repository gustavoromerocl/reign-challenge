import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Dropdown from '../components/Dropdown';
import Pagination from '../components/Pagination';


function Home(props) {
  const [result, setResult] = useState([]);

  /**Función que consume la api */
  const fetchResult = async () => {
    const { data } = await axios.get('https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=1');
    setResult(data.hits);
    console.log(data.hits);
  }

  /**Ejecuta la función fetchResult cuando se crea el componente */
  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <div className={`home-container ${props.className}`}>
      <div className='cards-container'>
        
        {/*Se mapea el array con la información de la api para contruir las cards con la info recibida*/
          result.map(({ author, story_title, story_url, created_at, created_at_i }) =>
            <Card author={author} storyTitle={story_title} storyUrl={story_url} createdAt={created_at} key={created_at_i.toString()} />)
        }

        {/*         <Pagination />
        <Dropdown /> */}


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