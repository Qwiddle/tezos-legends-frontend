import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';

export const AppWrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  padding: 0 1.5rem;
  padding-top: 12rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
`;
