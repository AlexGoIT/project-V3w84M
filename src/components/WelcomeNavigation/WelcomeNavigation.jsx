import {
  SignInLink,
  SignUpLink,
  WelcomeNavigationItem,
  WelcomeNavigationList,
} from './WelcomeNavigation.styled';

const WelcomeNavigation = () => {
  return (
    <WelcomeNavigationList>
      <WelcomeNavigationItem>
        <SignUpLink to="/signup">Sign Up</SignUpLink>
      </WelcomeNavigationItem>
      <WelcomeNavigationItem>
        <SignInLink to="/signin">Sign In</SignInLink>
      </WelcomeNavigationItem>
    </WelcomeNavigationList>
  );
};

export default WelcomeNavigation;
