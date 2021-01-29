import React, { useMemo } from 'react';
import cc from 'classcat';

import './CardLayout.scss';
import { Card } from './Card';

const CardLayout: React.FC<CardLayoutProps> = (props) => {
  const cards = useMemo(
    () =>
      Array(props.count)
        .fill(null)
        .map((_, i) => `Card ${i}`),
    [props.count]
  );

  return (
    <div className={cc(['CardLayout', `CardLayout--${props.variant}`])}>
      {cards.map((card) => (
        <div key={card} className="CardLayout__card">
          <Card>{card}</Card>
        </div>
      ))}
    </div>
  );
};

export { CardLayout };

type CardLayoutProps = {
  count: number;
  variant: 'flex' | 'grid';
};
