import styled from '@emotion/styled';

export const FormContainer = styled.div`
  margin-top: 20px;
overflow-y: hidden;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
  }
`;
export const IconSvg = styled.svg`
  position: absolute;
  top: -32px;
  right: 14px;
`;
export const SectionTitle = styled.p`
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 4px;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 335px;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: #efede8;
  font-size: 14px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 341px;
  }
`;

export const WrapperInputField = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  gap: 14px;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
   
  }
`;

export const InputField = styled.input`
  width: 165px;
  padding: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: #efede8;
`;

export const Label = styled.label`
  color: #efede8;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const WrapperRadio = styled.div`
  margin-top: 30px;


  @media screen and (min-width: 1440px) {
    display: block;
  }

  .radio {
    position: relative;
  }

  .radio-input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .radio-label {
    padding-left: 25px;
    cursor: pointer;
    font-family: 'Roboto';
    font-size: 16px;
    line-height: 1.71em;
    letter-spacing: -0.28px;
    color: #efede8;
    margin-right: 10px; 
    padding-left: 35px;

    @media screen and (min-width: 768px) and (max-width: 1439px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .radio-label::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border: 2px solid #636366;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 0;
    margin-right: 8px;
  }

  .radio-label::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border: 2px solid  #ef8964;
    background-color:  #ef8964;
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    top: 7px;
    left: 4px;
    z-index: 2;
  }

  .radio-input:checked + .radio-label::before {
    border-color:  #ef8964;
  }

  .radio-input:checked + .radio-label::after {
    opacity: 1;
  }
`;



export const Button = styled.button`
  border: none;
  margin: 40px 0px 0px 20px;
  padding: 12px 40px;
  border-radius: 12px;
  background: #E6533C;
  color: #efede8;
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  line-height: 18px;
  

  @media screen and (min-width: 768px) {
    margin: 40px 0px 0px 0;
    padding: 16px 50px;
  }
  &:hover:not([disabled]),
&:focus-visible:not([disabled]) {
  background: #ef8964;
}

&:disabled {
  color: rgba(239, 237, 232, 0.6);
  cursor: not-allowed;
}

`;








export const WrapperLevel = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const WrappInput = styled.div`
  position: relative;
  margin-top: 40px;

  label {
    position: absolute;
    font-size: 14px;
    top: -10px;
    left: 0px;
    transform: translateY(-50%);
    pointer-events: none;
    transition:
      top 0.2s,
      left 0.2s,
      transform 0.2s;
    color: rgba(239, 237, 232, 0.3);
  }

  input[type='number']:focus + label,
  input[type='number']:not(:placeholder-shown) + label {
    color:rgba(239, 237, 232, 0.3);
    transform: translateY(-44px);
  }
`;

