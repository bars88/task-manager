import React, { lazy, Suspense } from 'react';
import Loading from '../components/Loading';

const SuspenseHOC = ({ load }) => {
  const Component = lazy(load);

  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

export default React.memo(SuspenseHOC);