import React from 'react';
import classnames from 'classnames';
import './index.css';

const Page = ({
  children,
  className,
  title,
}) => (
  <section className={classnames('page', className)}>
    {title && <h1 className="page__title">{title}</h1>}
    {children}
  </section>
);

export default Page;