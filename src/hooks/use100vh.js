
import React from 'react';
// import { useWindowSize } from 'react-use';
import useWindowHeight from './useWindowHeight';

export default function use100vh() {
  const ref = React.useRef();
  const height = useWindowHeight();

  React.useEffect(
    () => {
      if (!ref.current) {
        return;
      }
      ref.current.style.height = height + 'px';
    },
    [height],
  );

  return ref;
}
