import styled  from 'styled-components';
import colors from './Theme'

const Button = styled.button`
  background-color: ${colors.btn};
  color: ${colors.primary};
  border: none;
  border-radius: 0.5em;
  padding: 0.75em 0;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${colors.btnHover};
  }
`

const PopupAddBtn = styled(Button)`
  width: 40%;
  border: solid 1px
`;
const PopupCancelBtn = styled(Button)`
  color: ${colors.red};
  width: 40%;
  border: solid 1px ${colors.red};
  background-color: ${colors.primary};

  &:hover {
    background-color: ${colors.red};
    color: ${colors.primary};
  }
`;

export { Button, PopupAddBtn, PopupCancelBtn }