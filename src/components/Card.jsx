/**https://github.com/tailwindlabs/heroicons 
 * https://momentjs.com/
*/

import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ClockIcon, HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import moment from 'moment';
import useFavesStore from '../zustand/faves-store';

function Card({className, author, storyTitle, storyUrl, createdAt, createdId, heart = false}) {
  const [hoursAgo, setHoursAgo] = useState('');
  const [hover, setHover] = useState(false);
  const [like, setLike] = useState(heart);

  /**Zustand Faves store */
  const {
    saveFaves,
    removeFaves
  } = useFavesStore( (state) => ({
    saveFaves: state.saveFaves,
    removeFaves: state.removeFaves
  }));




  function setFaves (){
    
    const favesObject = {
      author: author,
      story_title: storyTitle,
      story_url: storyUrl,
      created_at: createdAt, 
      created_at_i: createdId,
    }

    setLike(like => like = !like);

    !like ? saveFaves(favesObject) : removeFaves(favesObject);
  }

  function differenceDate() {
    /**Tranforma las fechas a formato date */
    let postDate = moment(new Date(createdAt)); 
    let currentDate = moment(new Date());
   
    /**Cacula la diferencia entre ambas fechas */
    let duration = moment.duration(currentDate.diff(postDate));

    /**Se asigna la conversión del tiempo a horas */
    let hours = Math.round(duration.asHours());
    
    /**Se actualiza el estado local */
    setHoursAgo(hours);
  } 

  useEffect(()=> {
    differenceDate();
  },[]);

  return (
    <div className={`container-card ${className} ${hover && 'hover-card'}`}>
      <div className='contain-card'>
        <div className={`time ${hover ? 'hover-card' : undefined}`}>
          <ClockIcon />
          <p className={`text ${hover ? 'hover-card' : undefined}`}>{hoursAgo === 0 ? 'recently' : `${hoursAgo} hours ago`} by {`${author}`} </p>
        </div>
        
          <h5 className={hover ? 'hover-card' : undefined}>
          <a onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} href={storyUrl} target="_blank">{`${storyTitle}`}</a>
          </h5>
        
        
      </div>
      <div className={`heart ${hover ? 'hover-card' : undefined}`}>
        {like ? <HeartIconSolid onClick={() => setFaves()} className={hover ? 'hover-card' : undefined} /> 
          : <HeartIcon onClick={() => setFaves()} className={hover ? 'hover-card' : undefined} />
        }
      </div>
    </div>
  )
}

export default styled(Card)`
  &.container-card{
    background-color: ${({ theme }) => theme.colors.white};
    height: ${({ theme }) => theme.dims.heights.medium};
    width: ${({ theme }) => theme.dims.widths.extraLarge};
    border-radius: ${({ theme }) => theme.dims.borderRadius.big};
    border: ${({ theme }) => theme.borders.medium};
    display: flex;
    flex: 1 1 400px;
    justify-content: space-between;
    margin: 10px;
    .contain-card{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 80%;
      margin: ${({theme}) => theme.dims.margin.horizontalCenter};

      .time {
        display: flex;
        color: ${({ theme }) => theme.colors.muted};
        font-size: ${({ theme }) => theme.fonts.size.small};
        padding-bottom: ${({theme}) => theme.dims.padding.verySmall};

        svg {
          display: flex;
          height: 16px;
          width: 16px;
          align-self: center;
        }

        p {
          display: flex;
          align-self: center;
        }
      }

      a {
        font-family: ${({theme}) => theme.fonts.family.roboto.medium};
        font-size: ${({ theme }) => theme.fonts.size.gray};
        color: ${({ theme }) => theme.colors.gray};
        display: inline;
      }
    }

    .heart:not(svg) {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.rgbaGray};
      width: 68px;

      svg {
        width: 24px;
        height: 22px;
        color: red;
        opacity: 1;
        cursor: pointer;
      }
    }

    .hover-card{
      opacity: 0.6;
    }
  }
  &.container-card.hover-card{
    border-color: ${({theme}) => theme.colors.rgbaGray};
  }
`;
