import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 4rem 0 12rem;
  background: ${(props) => props.theme['gray-900']};
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2.4rem;
`
export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.8rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
