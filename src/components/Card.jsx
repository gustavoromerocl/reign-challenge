/**https://github.com/tailwindlabs/heroicons */
import React from 'react'
import styled from 'styled-components';
import { ClockIcon, HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'

function Card(props) {
  return (
    <div className={`container-card ${props.className}`}>
      <div className='contain-card'>
        <div className='time'>
          <ClockIcon />
          <p className='text'>3 hours ago by author</p>
        </div>
        <h5>Yes, React is taking over front-end development. The question is why.</h5>
      </div>
      <div className='heart'>
        <HeartIconSolid />
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
    justify-content: space-between;

    .contain-card{
      padding: ${({ theme }) => theme.dims.padding.medium};

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
