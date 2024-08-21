import React, { createContext, useReducer, Dispatch, ReactNode } from "react";

type StoreProviderProps = {
  children: ReactNode;
};

type State = {
  isMenuOpen: boolean;
};

export type StoreContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

// ACTIONS
const TOGGLE_MENU = "TOGGLE_MENU";

type Action = { type: typeof TOGGLE_MENU };

const initialState = {
  isMenuOpen: false,
};

// Consolidate component's state update logic
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    default:
      return state;
  }
}

export const StoreContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
