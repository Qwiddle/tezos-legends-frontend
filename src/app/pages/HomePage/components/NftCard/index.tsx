import { useState } from 'react';
import { CardImage, GridBackground } from 'app/components/CardPrimary/styles';
import { Card, NftImage, NftImageDisplay } from './styles';

export const NftCard = () => {
  // todo: should use base64 svg
  const [nftImageUrl, setNftImageUrl] = useState<string | undefined>(
    'https://i.imgur.com/tKpyIKV.png',
  );

  return (
    <Card>
      <CardImage>
        <GridBackground>
          <NftImageDisplay>
            <NftImage src={nftImageUrl} />
          </NftImageDisplay>
        </GridBackground>
      </CardImage>
    </Card>
  );
};
