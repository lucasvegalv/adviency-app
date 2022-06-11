import styled from 'styled-components'
import colors from './Theme'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`
const ColumnWrapper = styled(Wrapper)`
  flex-direction: column;
`

const CardWrapper = styled(Wrapper)`
  flex-direction: column;
  gap: 0.5em;
  margin: 0 auto;
  margin-top: 20%;
  background-color: ${colors.primary};
  border: solid 1px ${colors.subtitle};
  padding: 1em;
  width: 60%;
`

const SpacedBtwWrapper = styled(Wrapper)`
  justify-content: space-between;
  gap: 0.5em;
`

export { Wrapper, CardWrapper, SpacedBtwWrapper, ColumnWrapper }