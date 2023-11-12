import {
  DayProductsArea,
  TitleArea,
  Title,
  Button,
  Add,
  ArrowIcon,
  TableArea,
  Message,
} from './DayProducts.styled';
import sprite from 'assets/images/sprite.svg';

const DayProducts = () => {
  return (
    <DayProductsArea>
      <TitleArea>
        <Title>Products</Title>
        <Button>
          <Add>Add product</Add>
          <ArrowIcon iconColor="#E6533C">
            <use href={`${sprite}#arrow`} />
          </ArrowIcon>
        </Button>
      </TitleArea>
      <TableArea>
        <Message>Not found products</Message>
      </TableArea>
      {/* <TableTitles>
        <ColumnTitle>Title</ColumnTitle>
        <ColumnTitle>Category</ColumnTitle>
        <ColumnTitle>Calories</ColumnTitle>
        <ColumnTitle>Weight</ColumnTitle>
        <ColumnTitle>Recommend</ColumnTitle>
      </TableTitles> */}
    </DayProductsArea>
  );
};

export default DayProducts;
