import React from 'react';

import {
  Layout,
  LayoutHeader,
  LayoutAside,
  LayoutMain,
  LayoutFooter,
} from './Layout';

export const HolyGrail: React.FC = (props) => {
  return (
    <Layout>
      <LayoutHeader>Header</LayoutHeader>
      <LayoutAside>Aside</LayoutAside>
      <LayoutMain>Content</LayoutMain>
      <LayoutFooter>Footer</LayoutFooter>
    </Layout>
  );
};
