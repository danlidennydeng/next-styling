import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.color.primary};

`
 
function Styledd() {
  return <Title>Styled Component</Title>
}

export default Styledd