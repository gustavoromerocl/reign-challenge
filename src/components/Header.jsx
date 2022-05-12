import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

function Header(props) {
  return (
    <header className={props.className}>
      <img src={logo} alt="logo" height={45}/>
    </header>
  )
}

/**Se exporta utilizando styled components para agregar estilo*/
export default styled(Header)`
  & img{
    vertical-align: middle;
    width: 208px;
    height: 28px;
  }
`;