import React, { lazy, Suspense } from 'react';

const SuspenseHOC = ({ load }) => {
  const Component = lazy(load);

  return (
    <Suspense fallback={() => <div>LOADING</div>}>
      <Component />
    </Suspense>
  );
};

export default React.memo(SuspenseHOC);