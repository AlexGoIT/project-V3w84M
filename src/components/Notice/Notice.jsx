import PropTypes from 'prop-types';
import { NoticeMessage, NoticeArea, NoticeIcon } from './Notice.styled';

const Notice = ({ notice }) => {
  return (
    <NoticeArea>
      <NoticeIcon></NoticeIcon>
      <NoticeMessage>{notice}</NoticeMessage>
    </NoticeArea>
  );
};

export default Notice;

Notice.propTypes = {
  notice: PropTypes.string.isRequired,
};
