/**https://styled-components.com/docs/basics#passed-props */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**Componentes creados con styled components */
let Input = styled.input`
  display: none;
`;

let Label = styled.label`
  display: inline-block;
  padding: 3px 16px;
  min-width: 98px;
  text-align: center;
  border-radius: ${({ theme }) => theme.dims.borderRadius.small};
  font-size: ${({ theme }) => theme.fonts.size.big};
  font-weight: ${({ theme }) => theme.fonts.size.bold};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.gray};
  border: ${({ theme }) => theme.borders.medium};
  /**Estilos para input seleccionado */
  &.checked {
    color: ${({ theme }) => theme.colors.azure};
    border: ${({ theme }) => theme.borders.sky};
  }
  /**Estilos para input no seleccionado */
  a:link, a:visited, a:active {
    color: ${({theme}) => theme.colors.black65};
    width:100%;
  }

  &:hover {
      background-color: ${({theme}) => theme.colors.rgbaGray};
    }
`;

function RadioButton(props) {
  
  /**Funcion que intercambia al clase con el efecto de selección */
  const ToggleChecked = (ev) => {
    let allTab = document.getElementById("allnews");
    let favesTab = document.getElementById("myfavoritenews");
    let currentTarget = ev.target.parentNode;

    /**Si el elemento contiene la clase checked termina la ejecucion */
    if(currentTarget.classList.contains('checked')) return;

    
    if(currentTarget.getAttribute("for") === allTab.getAttribute("for")) {
      favesTab.classList.remove("checked");
      allTab.classList.add("checked");
    } else {
      allTab.classList.remove("checked");
      favesTab.classList.add("checked");
    }

  }

  return (
    <div className={props.className}>
      <div>
        <Input
          type="radio"
          name="hackernews"
          value="allnews"
        />
        <Label className="checked" htmlFor="allnews" id="allnews" onClick={ToggleChecked}>
          <Link to="/" >All</Link> 
        </Label>
      </div>
      <div>
        <Input
          
          type="radio"
          name="hackernews"
          value="myfavoritenews" 
          />
        <Label htmlFor="myfavoritenews" id="myfavoritenews">
          <Link to="/faves" onClick={ToggleChecked}>My faves</Link>
        </Label>
      </div>
    </div>
  )
}

export default styled(RadioButton)`
  &{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

`;