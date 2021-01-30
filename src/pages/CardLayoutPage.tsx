import React from 'react';

import { useSizeLabel } from '../hooks/useSizeLabel';
import { Page, PageHeader, PageSidebar, PageMain } from '../components/Page';
import { Nav, NavLink } from '../components/Nav';

import { CardLayout } from '../examples/CardLayout';

const CardLayoutPage: React.FC = () => {
  const { register } = useSizeLabel();

  return (
    <Page>
      <PageHeader ref={register}>
        <h1>Card Layout</h1>
      </PageHeader>
      <PageSidebar ref={register}>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="#">Nav A</NavLink>
          <NavLink to="#">Nav B</NavLink>
          <NavLink to="#">Nav C</NavLink>
        </Nav>
      </PageSidebar>
      <PageMain ref={register}>
        <span>Flexbox Albatross (breakpoint set on card = parent's width)</span>
        <CardLayout count={3} variant="flexbox-albatross" />
        <hr />
        <span>Flex Pancake (breakpoint set on card = card's width)</span>
        <CardLayout count={3} variant="flex-pancake" />
        <hr />
        <span>Grid (breakpoint set on parent = card's width)</span>
        <CardLayout count={3} variant="grid" />
      </PageMain>
    </Page>
  );
};

export default CardLayoutPage;
