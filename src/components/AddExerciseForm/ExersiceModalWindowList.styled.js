import styled from 'styled-components';

export const ExersiceModalList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  align-items: center;
  width: 302px;

  @media screen and (min-width: 768px) {
    width: 345px;
    align-items: flex-start;
  }
`;

export const ExersiceModalLink = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 18px;
  width: 147px;
  justify-content: center;

  gap: 4px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);

  @media screen and (min-width: 768px) {
    width: 168px;
    align-items: flex-start;
  }
`;

export const ExersiceModalLinkSub = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 18px;
`;

export const ExersiceModalLinkTitle = styled.p`
  color: #efede8;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(24 / 16);
  text-transform: capitalize;
`;
