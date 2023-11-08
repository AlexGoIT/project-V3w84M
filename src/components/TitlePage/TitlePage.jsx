import PropTypes from 'prop-types';
import { Title } from './TitlePage.styled';

const TitlePage = ({ title }) => {
  return <Title>{title}</Title>;
};

export default TitlePage;

TitlePage.propTypes = {
  title: PropTypes.string.isRequired,
};
