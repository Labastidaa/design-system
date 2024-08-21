import { StoreContext, StoreContextType } from "@/lib/Store";
import { useContext } from "react";

{
  /*
  *** Combine reducers and context together to manage state
  useContext - Manage context
  createContext React API
  useReducer - Consolidate a component's state update logic. (Manage state)
*/
}

export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
