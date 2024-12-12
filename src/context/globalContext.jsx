import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, payload],
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        selectedProducts: payload,
      };
    case "CALCULATE":
      return {
        ...state,
        totalAmount: payload[1],
        totalPrise: payload[0],
      };

    case "CHANGE_COLOR":
      return { ...state, color: payload };
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    color: "",
    selectedProducts: [],
    totalPrise: 0,
    totalAmount: 0,
  });

  const calculate = () => {
    let allPrise = 0;
    let allAmount = 0;

    if (state.selectedProducts.length) {
      state.selectedProducts.forEach((product) => {
        allPrise += product.price * product.amount;
        allAmount += product.amount;
      });
    }
dispatch({type:"CALCULATE",payload:[allPrise,allAmount]})

  };

  const addProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  const removeProduct = (id) => {
    const filterProducts = state.selectedProducts.filter(
      (product) => product.id !== id,
    );
    dispatch({ type: "REMOVE_PRODUCT", payload: filterProducts });
    calculate();
  };

  useEffect(() => {
    calculate();
  }, [state.selectedProducts]);

  return (
    <GlobalContext.Provider
      value={{ ...state, dispatch, removeProduct, addProduct }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
