import { Link } from "react-router-dom";
import Logo from 'components/Logo';
import {LogoWrap,  NotFoundWrapper, NotFoundContent, NotFoundTitle, NotFoundText, BackHomeBtn } from './NotFound.styled';


const NotFound = () => {
  return ( 
    <NotFoundWrapper>      
      <LogoWrap>
        <Logo iconColor="#EFEDE8" /> 
      </LogoWrap>    
        <NotFoundContent>          
          <NotFoundTitle>404</NotFoundTitle>
          <NotFoundText>
            Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience.
          </NotFoundText>
          <BackHomeBtn to={"/"}>
            Go Home
          </BackHomeBtn>
        </NotFoundContent>
      </NotFoundWrapper>
  );
};

export default NotFound;
