import styled from 'styled-components'
import colors from './Theme'

const Input = styled.input`
  width: 100%;
  padding: 0.5em 0.5em;
  border: solid 1.25px ${colors.btn};
  border-radius: 0.5em;

  &:focus {
   border-color: ${colors.btn};
}
`

const Select = styled.select`
  width: 20%;
  padding: 0.5em 0.5em;
  border: solid 1.25px ${colors.btn};
  border-radius: 0.5em;
  text-align: center;

  &:focus {
   border-color: ${colors.btn};
  }
`

export { Input, Select }