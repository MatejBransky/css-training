import React from 'react';

import './Card.scss';

export const Card: React.FC = (props) => {
  return <div {...props} className="Card" />;
};

export const CardHeader: React.FC = (props) => {
  return <header {...props} className="Card__header" />;
};

export const CardBody: React.FC = (props) => {
  return <main {...props} className="Card__body" />;
};

export const CardFooter: React.FC = (props) => {
  return <div {...props} className="Card__footer" />;
};
