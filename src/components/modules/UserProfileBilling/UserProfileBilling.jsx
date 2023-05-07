import { Container } from 'components/global/Container';
import cake from '../../../img/billing/cakeForBilling.jpg';
import { Cake, Grid, TransactionList } from './UserProfileBilling.styled';
import { OperationItem } from './OperationItem/OperationItem';

export function UserProfileBilling() {
  return (
    <Container>
      <Grid>
        <Cake src={cake} />
        <TransactionList>
          <OperationItem
            date="29.11.2022"
            time="o 19:17"
            productName="Курс “Торти” "
            transactionDetails="Разовий платіж Картка: 545708*56"
            price="2800 грн"
          />
          <OperationItem
            date="29.11.2022"
            time="o 19:17"
            productName="Курс “Торти” "
            transactionDetails="Разовий платіж Картка: 545708*56"
            price="2800 грн"
          />
          <OperationItem
            date="29.11.2022"
            time="o 19:17"
            productName="Курс “Торти” "
            transactionDetails="Разовий платіж Картка: 545708*56"
            price="2800 грн"
          />
          <OperationItem
            date="29.11.2022"
            time="o 19:17"
            productName="Курс “Торти” "
            transactionDetails="Разовий платіж Картка: 545708*56"
            price="2800 грн"
          />
        </TransactionList>
      </Grid>
    </Container>
  );
}
