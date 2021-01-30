import React from 'react';

import './Layout.scss';

export const Layout: React.FC = (props) => {
  return <div {...props} className="Layout" />;
};

export const LayoutHeader: React.FC = (props) => {
  return <div {...props} className="Layout__header" />;
};

export const LayoutAside: React.FC = (props) => {
  return <div {...props} className="Layout__aside" />;
};

export const LayoutMain: React.FC = (props) => {
  return <div {...props} className="Layout__main" />;
};

export const LayoutFooter: React.FC = (props) => {
  return <div {...props} className="Layout__footer" />;
};
