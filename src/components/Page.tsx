import React from 'react';

import './Page.scss';

export const Page = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>((props, ref) => {
  return <div {...props} className="Page" ref={ref} />;
});

export const PageHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'header'>
>((props, ref) => {
  return <header {...props} className="Page__header" ref={ref} />;
});

export const PageSidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'aside'>
>((props, ref) => {
  return <aside {...props} className="Page__sidebar" ref={ref} />;
});

export const PageMain = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'main'>
>((props, ref) => {
  return <main {...props} className="Page__main" ref={ref} />;
});
