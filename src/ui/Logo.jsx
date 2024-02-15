// Styled components
import styled from 'styled-components';

// Context
import { useDarkMode } from '../context/DarkModeContext';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <StyledLogo>
      {isDarkMode ? (
        <Img src='/logo-dark.png' alt='Logo' />
      ) : (
        <Img src='/logo-light.png' alt='Logo' />
      )}
    </StyledLogo>
  );
}

export default Logo;
