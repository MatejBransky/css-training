import { useCallback, useRef, useState } from 'react';
import { loggerFactory } from '@matejbransky/logger';

import './useSizeLabel.scss';

const log = loggerFactory.getLogger('useSizeLabel.tsx');
log.setLevel('ALL');

export const useSizeLabel = () => {
  const refs = useRef(new Set<HTMLElement>());
  const [remSize] = useState(() => {
    const value = parseInt(getComputedStyle(document.documentElement).fontSize);
    log.info('remSize', value);
    return value;
  });
  const register = useCallback(
    ($ref: HTMLElement | null) => {
      if ($ref && !refs.current.has($ref)) {
        const resizeObserver = new ResizeObserver((entries) => {
          let pxValue: number;
          let remValue: number;

          for (let entry of entries) {
            // Checking for chrome as using a non-standard array
            if (entry.contentBoxSize) {
              pxValue = entry.borderBoxSize[0].inlineSize;
              remValue = round(pxValue / remSize, 1);
            } else {
              const padding = parseFloat(
                globalThis.getComputedStyle($ref).getPropertyValue('padding')
              );
              pxValue = entry.contentRect.width + 2 * padding;
              remValue = round(pxValue / remSize, 1);
            }

            const text = `"${pxValue.toFixed(1)}px / ${remValue.toFixed(
              1
            )}rem"`;

            $ref.style.setProperty('--observed-text', text);
          }
        });

        resizeObserver.observe($ref);
        $ref.classList.add('Observed');
        refs.current.add($ref);
        log.info('Ref succesfully registered!', $ref);
      } else {
        log.info('Ref already registered!');
      }
    },
    [remSize]
  );

  return {
    register,
  };
};

const round = (n: number, precision: number) =>
  ~~(Math.pow(10, precision) * n) / Math.pow(10, precision);
