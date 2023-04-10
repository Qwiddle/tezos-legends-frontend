import styled from 'styled-components';
import { CardDetails, CardPrimary } from 'app/components/CardPrimary/styles';
import { H1 } from 'app/components/Typography/H1/styles';
import { ReactNode } from 'react';

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

export const NftDetails = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const NftDescription = styled.div`
  display: block;
`;

export const NftTitle = styled(H1)`
  padding: 0;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 400;
`;

export const NftId = styled(H1)`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const NftDate = styled(H1)`
  font-size: 1rem;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

export const BidDetails = styled(CardPrimary)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 7.95px;
  box-shadow: none;
`;

export const BidDetailsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const BidDetailsTitle = styled(H1)`
  font-size: 1rem;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

export const BidDetailsAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background-color: ${p => p.theme.backgroundVariant};
  border: double 1px ${p => p.theme.brand};
  overflow: hidden;
`;

export const BidDetailsAvatarImg = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  padding: 0.1rem;
`;

export const BidDetailsBidderName = styled(BidDetailsTitle)`
  color: ${p => p.theme.textTertiary};
`;

export const BidDetailsLastBid = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const LastBidAmount = styled(BidDetailsTitle)`
  color: ${p => p.theme.text};
  font-size: 1rem;
  font-weight: 600;
`;

export const LastBidTime = styled(LastBidAmount)`
  color: ${p => p.theme.textTertiary};
  font-weight: 400;
`;

export const LastBidArrow = styled.span`
  color: ${p => p.theme.green};
  font-weight: 600;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 1rem;
  border-radius: 100px;
  background: ${p => p.theme.backgroundVariant};
  overflow: hidden;
`;

type ProgressBarFillProps = {
  progress: number;
  children: ReactNode;
};

export const ProgressBarFill = styled.div<ProgressBarFillProps>`
  width: ${({ progress }) => (progress ? `${progress}%` : 0)};
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
  background: ${p => p.theme.brand};
`;
