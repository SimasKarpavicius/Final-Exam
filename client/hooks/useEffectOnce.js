import {useCallback, useEffect, useRef} from "react";

export function useEffectOnce(func) {
  const didRun = useRef(false);
  const currentFunc = useFunction(func);

  useEffect(() => {
    if (!didRun.current) {
      didRun.current = true;
      currentFunc();
    }
  }, [currentFunc]);
}

export function useFunction(func) {
  const funcRef = useRef(func);
  funcRef.current = func;
  return useCallback((...args) => funcRef.current(...args), []);
}