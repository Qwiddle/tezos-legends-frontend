import styled from 'styled-components';

console.log(`${p => p.theme}`);

export const NavigationHeaderWrapper = styled.header`
  width: 100%;
  height: 96px;
  top: 0;
  padding: 0 1.5rem;
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
  }
`;
