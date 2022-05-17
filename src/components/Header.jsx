import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import devices from '../theme/breakoints';

function Header(props) {
  return (
    <header className={props.className}>
      <img src={logo} alt="logo" height={45}/>
    </header>
  )
}

/**Se exporta utilizando styled components para agregar estilo*/
export default styled(Header)`
  &{
    margin: 0 auto;
  }

  & img{
    vertical-align: middle;
    width: 208px;
    height: 28px;
  }

  @media ${devices.mediumLaptop}{
    &{
      margin: 0;
      margin-left: .5rem;
    }
  }
`;