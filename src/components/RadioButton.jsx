/**https://styled-components.com/docs/basics#passed-props */
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

  /**Estilos para input seleccionado */
  ${Input}:checked + && {
    color: ${({ theme }) => theme.colors.azure};
    border: ${({ theme }) => theme.borders.sky};
  };

  /**Estilos para input no seleccionado */
  ${Input}:not(:checked) + && {
    color: ${({ theme }) => theme.colors.gray};
    border: ${({ theme }) => theme.borders.medium};
  };
`;

function RadioButton(props) {
  return (
    <div className={props.className}>
      <div>
        <Input
          id="allnews"
          type="radio"
          name="hackernews"
          value="all"
          checked
        />
        <Label htmlFor="allnews">All</Label>
      </div>
      <div>
        <Input
          id="myfavoritenews"
          type={"radio"}
          name="hackernews"
          value={"myfaves"} />
        <Label htmlFor="myfavoritenews">My faves</Label>
      </div>
    </div>
  )
}

export default styled(RadioButton)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;