import {
  ExersiceModalLink,
  ExersiceModalLinkSub,
  ExersiceModalLinkTitle,
  ExersiceModalList,
} from './ExersiceModalWindowList.styled';

const ExersiceModalWindowList = ({ name, bodyPart, target, equipment }) => {
  return (
    <ExersiceModalList>
      <ExersiceModalLink>
        <ExersiceModalLinkSub>Name</ExersiceModalLinkSub>
        <ExersiceModalLinkTitle>{name}</ExersiceModalLinkTitle>
      </ExersiceModalLink>
      <ExersiceModalLink>
        <ExersiceModalLinkSub>Target</ExersiceModalLinkSub>
        <ExersiceModalLinkTitle>{target}</ExersiceModalLinkTitle>
      </ExersiceModalLink>
      <ExersiceModalLink>
        <ExersiceModalLinkSub>Body Part</ExersiceModalLinkSub>
        <ExersiceModalLinkTitle>{bodyPart}</ExersiceModalLinkTitle>
      </ExersiceModalLink>
      <ExersiceModalLink>
        <ExersiceModalLinkSub>Equipment</ExersiceModalLinkSub>
        <ExersiceModalLinkTitle>{equipment}</ExersiceModalLinkTitle>
      </ExersiceModalLink>
    </ExersiceModalList>
  );
};

export default ExersiceModalWindowList;
