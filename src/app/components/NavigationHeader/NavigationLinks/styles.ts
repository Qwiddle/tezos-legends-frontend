import { Link } from 'app/components/Typography/Link/styles';
import styled from 'styled-components';

export const NavigationLinks = styled.div`
  display: flex;
`;

export const NavigationLink = styled(Link)`
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  align-items: center;

  .icon {
    margin-right: 0.25rem;
  }

  :last-of-type {
    margin-right: 1rem;
  }
`;

export const NavigationIcon = styled.span`
  padding-right: 5px;
`;
