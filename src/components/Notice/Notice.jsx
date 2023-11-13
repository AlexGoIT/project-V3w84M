import PropTypes from 'prop-types';

import { NoticeMessage, NoticeArea, NoticeIcon } from './Notice.styled';

import sprite from 'assets/images/sprite.svg';

const Notice = ({ notice }) => {
  return (
    <NoticeArea>
      <NoticeIcon>
        <svg width="24" height="24" fill="#efede8">
          <use href={`${sprite}#warning`} />
        </svg>
      </NoticeIcon>
      <NoticeMessage>{notice}</NoticeMessage>
    </NoticeArea>
  );
};

export default Notice;

Notice.propTypes = {
  notice: PropTypes.string.isRequired,
};
