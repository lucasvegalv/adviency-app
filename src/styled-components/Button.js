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
  transition: 0.25s;

  &:hover {
    background-color: ${colors.btnHover};
  }
`

const AddButton = styled(Button)`
  width: 20%;
  height: 10%;
  border: solid 1px
`;

const DeleteAllBtn = styled(Button)`
  color: ${colors.red};
  width: 100%;
  border: solid 1px ${colors.red};
  background-color: ${colors.primary};
  &:hover {
    background-color: ${colors.red};
    color: ${colors.primary};
  }
`;

const DeleteItemBtn = styled(DeleteAllBtn)`
  max-width: 1.75em;
  height: 1.75em;
  padding: 0;
`

export { Button, AddButton, DeleteAllBtn, DeleteItemBtn }