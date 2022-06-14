import styled from 'styled-components'
import colors from './Theme'

const Input = styled.input`
  width: 40%;
  padding: 0.5em 0.5em;
  border: solid 1px ${colors.subtitle};
  border-radius: 0.2em;
`;

const Select = styled.select`
  min-width: 3.75em;
  padding: 0.5em 0.5em;
  border: solid 1px ${colors.subtitle};
  border-radius: 0.2em;
  text-align: center;
`;

export { Input, Select }