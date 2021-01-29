import React from 'react';

import './Page.scss';

export const Page: React.FC = (props) => {
  return <div {...props} className="Page" />;
};

export const PageHeader: React.FC = (props) => {
  return <header {...props} className="Page__header" />;
};

export const PageSidebar: React.FC = (props) => {
  return <aside {...props} className="Page__sidebar" />;
};

export const PageMain: React.FC = (props) => {
  return <main {...props} className="Page__main" />;
};
