import { createContext, useEffect, useReducer } from "react";
import { getRates, getTransactions } from "./service";
import { calculateBalance, convertToDollar } from "./utils";

const initialState = {
  loading: true,
  error: false,
  balances: {},
  total: 0,
  transactions: {},
  rates: {},
};

const ACTION_POPULATE_STORE = "ACTION_POPULATE_STORE";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_POPULATE_STORE: {
      const { transactions, rates } = action.payload;
      const balances = Object.keys(transactions).reduce((prev, next) => {
        return { ...prev, [next]: calculateBalance(transactions[next]) };
      }, {});
      const total = Object.keys(balances).reduce(
        (prev, next) => Number(prev) + Number(convertToDollar(next, balances[next], rates)),
        0
      );
      return { ...state, transactions, balances, total, rates, loading: false };
    }
    default:
      return { ...initialState };
  }
};

export const Store = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function effect() {
      try {
        const transactions = await getTransactions();
        const rates = await getRates();
        dispatch({
          type: ACTION_POPULATE_STORE,
          payload: { transactions, rates },
        });
      } catch (err) {}
    }
    effect();
  }, []);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
