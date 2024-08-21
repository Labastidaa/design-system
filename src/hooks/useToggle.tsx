// Optimized Boolean State
import { useCallback, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

export function useToggle(
  defaultValue?: boolean,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(!!defaultValue);

  // Returns a memoized version of the callback that only changes if one of the inputs has changed.
  const toggle = useCallback(() => {
    setValue((x) => !x);
  }, []);

  return [value, toggle, setValue];
}
