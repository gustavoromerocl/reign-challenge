/**https://github.com/tailwindlabs/heroicons 
 * https://momentjs.com/
*/

import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ClockIcon, HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import moment from 'moment';

function Card({className, author, storyTitle, storyUrl, createdAt}) {
  const [hoursAgo, setHoursAgo] = useState('');

  function differenceDate() {
    let postDate = moment(new Date(createdAt)); //Formatear fecha para que entrega diferencia conrrecta en horas
    let currentDate = moment(new Date());
    
    let duration = moment.duration(currentDate.diff(postDate));
    let hours = Math.round(duration.asHours());
    
    setHoursAgo(hours);
  } 

  useEffect(()=> {
    differenceDate();
  },[]);

  return (
    <div className={`container-card ${className}`}>
      <div className='contain-card'>
        <div className='time'>
          <ClockIcon />
          <p className='text'>{hoursAgo == 0 ? 'recently' : `${hoursAgo} hours ago`} by {`${author}`} </p>
        </div>
        <h5>{`${storyTitle}`}</h5>
      </div>
      <div className='heart'>
        <HeartIcon />
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

      h5 {
        font-family: ${({theme}) => theme.fonts.family.roboto.medium};
        font-size: ${({ theme }) => theme.fonts.size.gray};
        color: ${({ theme }) => theme.colors.gray};
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
      }
    }
  }
`;
