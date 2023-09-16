import { createContext, useReducer } from "react";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark': 'light'};
    case 'SET_API_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};