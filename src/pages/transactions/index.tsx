import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable
} from './styles'

export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width={'50%'}>Desenvolvimento de uma Aplicação</td>
              <td>
                <PriceHighlight variant='income'>R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width={'50%'}>Hamburguer</td>
              <td>
                <PriceHighlight variant='outcome'>- R$ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width={'50%'}>Conta de Luz</td>
              <td>
                <PriceHighlight variant='outcome'>- R$ 200,00</PriceHighlight>
              </td>
              <td>Casa</td>
              <td>13/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
