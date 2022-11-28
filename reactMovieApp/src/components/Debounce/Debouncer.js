import { useEffect, useState } from 'react';

const Debouncer = (value, delay) => {
  const [debouncer, setDebouncer] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncer(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);
  return debouncer;
};

export default Debouncer;
