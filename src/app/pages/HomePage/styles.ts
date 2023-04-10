import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';
import { media } from 'styles/media';

export const AppWrapper = styled.div`
  width: 100%;
  height: calc(100%);
  padding: 0 1.5rem;
  padding-top: calc(12rem + ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;
