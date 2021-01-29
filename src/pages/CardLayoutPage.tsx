import React from 'react';

import { Page, PageHeader, PageSidebar, PageMain } from '../components/Page';
import { Nav, NavLink } from '../components/Nav';

import { CardLayout } from '../examples/CardLayout';

const CardLayoutPage: React.FC = () => {
  return (
    <Page>
      <PageHeader>
        <h1>Card Layout</h1>
      </PageHeader>
      <PageSidebar>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="#">Nav A</NavLink>
          <NavLink to="#">Nav B</NavLink>
          <NavLink to="#">Nav C</NavLink>
        </Nav>
      </PageSidebar>
      <PageMain>
        <CardLayout count={30} variant="flex" />
      </PageMain>
    </Page>
  );
};

export default CardLayoutPage;
