import styled from '@emotion/styled';

export const WrapperTitleCategoriesDiv = styled.div`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: ${props => props.margin && '32px'};
    margin-top: ${props => props.margin && '72px'};
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 64px;
    margin-bottom: ${props => props.margin && '32px'};
    padding-inline: 96px;
  }
`;

export const ContentDiv = styled.div`
  position: relative;
  margin-inline: auto;
`;
