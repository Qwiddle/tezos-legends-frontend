import { ButtonPrimary } from '../ButtonPrimary/styles';
import { Brand } from '../Typography/Brand/styles';
import { NavigationItems } from './NavigationItems/styles';
import {
  NavigationIcon,
  NavigationLink,
  NavigationLinks,
} from './NavigationLinks/styles';
import { NavigationHeaderWrapper } from './styles';
import { NavPage } from './types';

export const NavigationHeader = () => {
  const pages: NavPage[] = [
    {
      url: '#',
      name: 'DAO',
      alt: 'DAO',
      icon: <span />,
    },
    {
      url: '#',
      name: 'Marketplace',
      alt: 'Marketplace',
      icon: <span />,
    },
    {
      url: '#',
      name: 'Documentation',
      alt: 'Documentation',
      icon: <span />,
    },
    {
      url: '#',
      name: 'FAQ',
      alt: 'Frequently Asked Questions',
      icon: <span />,
    },
  ];

  return (
    <NavigationHeaderWrapper>
      <NavigationItems>
        <Brand>Tezos Legends</Brand>
        <NavigationLinks>
          {pages.map((page, index) => (
            <NavigationLink
              key={index}
              to={page.url}
              target="_blank"
              title={page.alt}
              rel="noopener noreferrer"
            >
              <NavigationIcon>{page.icon}</NavigationIcon>
              {page.name}
            </NavigationLink>
          ))}
          <ButtonPrimary>Connect</ButtonPrimary>
        </NavigationLinks>
      </NavigationItems>
    </NavigationHeaderWrapper>
  );
};
