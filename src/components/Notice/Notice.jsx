import PropTypes from 'prop-types';
import {
  NoticeMessage,
  NoticeArea,
  NoticeIcon,
  WarningIcon,
} from './Notice.styled';
import sprite from 'assets/images/sprite.svg';

const Notice = ({ notice }) => {
  return (
    <NoticeArea>
      <NoticeIcon>
        <WarningIcon>
          <use href={`${sprite}#warning`} />
        </WarningIcon>
      </NoticeIcon>
      <NoticeMessage>{notice}</NoticeMessage>
    </NoticeArea>
  );
};

export default Notice;

Notice.propTypes = {
  notice: PropTypes.string.isRequired,
};
