import styled from 'styled-components';

export const CardPrimary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 380px;
  height: 380px;
  background: ${p => p.theme.backgroundGradient};
  border: double 4px transparent;
  border-radius: 1rem;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const CardDetails = styled.div`
  width: 100%;
  height: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GridBackground = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  background-color: transparent;
  background-size: 15px 15px;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      ${p => p.theme.backgroundVariant} 25%,
      ${p => p.theme.backgroundVariant} 26%,
      transparent 27%,
      transparent 74%,
      ${p => p.theme.backgroundVariant} 75%,
      ${p => p.theme.backgroundVariant} 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      ${p => p.theme.backgroundVariant} 25%,
      ${p => p.theme.backgroundVariant} 26%,
      transparent 27%,
      transparent 74%,
      ${p => p.theme.backgroundVariant} 75%,
      ${p => p.theme.backgroundVariant} 76%,
      transparent 77%,
      transparent
    );
`;

export const CardImage = styled.div`
  width: 100%;
  height: 50%;
`;
