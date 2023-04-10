import { useState } from 'react';
import {
  CardDetails,
  CardImage,
  GridBackground,
} from 'app/components/CardPrimary/styles';
import {
  BidDetails,
  BidDetailsAvatar,
  BidDetailsAvatarImg,
  BidDetailsBidderName,
  BidDetailsHeader,
  BidDetailsLastBid,
  BidDetailsTitle,
  Card,
  LastBidAmount,
  LastBidTime,
  NftDate,
  NftDescription,
  NftDetails,
  NftId,
  NftImage,
  NftImageDisplay,
  NftTitle,
  ProgressBar,
  ProgressBarFill,
} from './styles';
import truncateMiddle from '@stdlib/string-truncate-middle/';
import styled from 'styled-components';

export const NftCard = () => {
  const [activeBidder, setActiveBidder] = useState<string | undefined>(
    truncateMiddle('tz1RLomvUivaCNUmec7gALquhGMu5PgzMvkP', 14),
  );

  // todo: should use base64 svg
  const [nftImageUrl, setNftImageUrl] = useState<string | undefined>(
    'https://i.imgur.com/tKpyIKV.png',
  );

  const [bidderAvatar, setBidderAvatarUrl] = useState<string | undefined>(
    'https://services.tzkt.io/v1/avatars/tz1RLomvUivaCNUmec7gALquhGMu5PgzMvkP',
  );

  return (
    <Wrapper>
      <Card>
        <CardImage>
          <GridBackground>
            <NftImageDisplay>
              <NftImage src={nftImageUrl} />
            </NftImageDisplay>
          </GridBackground>
        </CardImage>
        <CardDetails>
          <NftDetails>
            <NftDescription>
              <NftTitle>Tezos Legends</NftTitle>
              <NftId>#001</NftId>
            </NftDescription>
            <NftDate>Apr 9, 2023</NftDate>
          </NftDetails>
          <BidDetails>
            <BidDetailsHeader>
              <BidDetailsTitle>Active bid</BidDetailsTitle>
            </BidDetailsHeader>
            <span
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <BidDetailsBidderName>{activeBidder}</BidDetailsBidderName>
              <BidDetailsAvatar>
                <BidDetailsAvatarImg src={bidderAvatar} alt="Highest Bidder" />
              </BidDetailsAvatar>
            </span>

            <BidDetailsLastBid>
              <LastBidAmount>125ꜩ</LastBidAmount>
              <LastBidTime>15m ago</LastBidTime>
            </BidDetailsLastBid>
            <ProgressBar>
              <ProgressBarFill progress={35}> </ProgressBarFill>
            </ProgressBar>
          </BidDetails>
        </CardDetails>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;
