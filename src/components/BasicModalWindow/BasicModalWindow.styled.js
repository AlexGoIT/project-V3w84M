import styled from '@emotion/styled';

export const BasicWindow = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(04, 04, 04, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
  position: relative;
  ${({ children }) => {
    if (children.some(child => child.key === 'prodSuccess')) {
      return 'padding: 48px 89px;   @media screen and (min-width: 768px) {padding: 64px 136px;}';
    }
    if (children.some(child => child.key === 'addProd')) {
      return `padding: 48px 24px;   @media screen and (min-width: 768px) {padding: 48px 32px;}`;
    }
    if (children.some(child => child.key === 'exercSuccess')) {
      return `padding: 48px 89px;   @media screen and (min-width: 768px) {padding: 64px 134px;}`;
    }
    if (children.some(child => child.key === 'addExerc')) {
      return `padding: 48px 16px;   @media screen and (min-width: 768px) {padding: 48px 32px;}`;
    }
  }};

  @media screen and (min-width: 768px) {
  }
`;
export const ButtonClouse = styled.button`
  width: 22px;
  height: 22px;

  border: none;
  background: inherit;
  position: absolute;
  top: 14px;
  right: 14px;
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const SvgClouse = styled.svg`
  width: 20px;
  height: 20px;

  stroke: var(--white-color);
`;
