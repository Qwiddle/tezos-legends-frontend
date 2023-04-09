import styled from 'styled-components';
import { CardPrimary } from 'app/components/CardPrimary/styles';

export const Card = styled(CardPrimary)`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  max-height: 380px;
`;

export const NftImageDisplay = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
`;

export const NftImage = styled.img`
  max-width: 100%;
  height: auto;
  position: absolute;
  z-index: 1;
  bottom: 0;
`;
