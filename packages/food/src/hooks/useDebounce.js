import { useEffect, useState } from "react";

const useDebounce = (val, delay) => {
  const [debouncedVal, setDebouncedVal] = useState(val);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedVal(val);
    }, delay);
    return () => clearTimeout(timer);
  }, [val]);

  return debouncedVal;
};

export default useDebounce;
