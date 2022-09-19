import { useEffect, useState } from 'react';

const useWindowSize = (): WindowSize => {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  }, []);

  return { width, height };
};

export default useWindowSize;
