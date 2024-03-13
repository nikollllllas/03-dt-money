import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img
          src={logo}
          alt=''
        />

        <NewTransactionButton>Nova transação </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}