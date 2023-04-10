import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppWrapper } from './styles';
import { NftCard } from './components/NftCard';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <AppWrapper>
        <NftCard />
      </AppWrapper>
    </>
  );
}
