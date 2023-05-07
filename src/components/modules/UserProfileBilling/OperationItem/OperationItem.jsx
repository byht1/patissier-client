import {
  Date,
  ItemBox,
  Price,
  ProductName,
  Time,
  TimeBox,
  TransactionDetails,
} from './OperationItem.styled';

export function OperationItem({
  date,
  time,
  productName,
  transactionDetails,
  price,
}) {
  return (
    <ItemBox>
      <TimeBox>
        <Date>{date}</Date>
        <Time>{time}</Time>
      </TimeBox>
      <ProductName>{productName}</ProductName>
      <TransactionDetails>{transactionDetails}</TransactionDetails>
      <Price>{price}</Price>
    </ItemBox>
  );
}
