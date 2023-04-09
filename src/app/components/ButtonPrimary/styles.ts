import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  border: none;
  user-select: none;
  cursor: pointer;
  -webkit-user-select: none;
  touch-action: manipulation;

  width: 99px;
  height: 48px;

  /* Accent/Brand */

  background: ${p => p.theme.brand};
  color: ${p => p.theme.text};
  border-radius: 7.29px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  :hover {
    background-color: ${p => p.theme.brandHover};
  }
`;
