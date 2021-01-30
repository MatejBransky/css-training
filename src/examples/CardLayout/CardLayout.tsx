import React, { CSSProperties, useMemo } from 'react';
import cc from 'classcat';

import { useSizeLabel } from '../../hooks/useSizeLabel';
import './CardLayout.scss';
import texts from './texts.json';
import { Card, CardBody, CardHeader } from './Card';

const CardLayout: React.FC<CardLayoutProps> = (props) => {
  const { register } = useSizeLabel();
  const cards = useMemo(
    () =>
      Array(props.count)
        .fill(null)
        .map((_, i) => `Card ${i}`),
    [props.count]
  );

  return (
    <div className={cc(['CardLayout', `CardLayout--${props.variant}`])}>
      {cards.map((card, index) => {
        const special = index === 1;
        const breakpoint = special ? '30rem' : '15rem';
        const style = { '--breakpoint': breakpoint } as CardLayoutStyle;

        return (
          <div
            key={card}
            className="CardLayout__card"
            style={style}
            ref={register}
          >
            <Card>
              <CardHeader>
                {card} ({breakpoint})
              </CardHeader>
              <CardBody>{texts[index]}</CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export { CardLayout };

type CardLayoutProps = {
  count: number;
  variant: 'flexbox-albatross' | 'flex-pancake' | 'grid';
};

interface CardLayoutStyle extends CSSProperties {
  '--breakpoint': string;
}
