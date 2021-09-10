// const RATE_URL = "https://api.shakepay.co/rates";
const TRANSACTIONS_URL =
  "https://shakepay.github.io/programming-exercise/web/transaction_history.json";

const transform = (transactions) => {
  const currencies = [...new Set(transactions.map((item) => item.currency))];
  return currencies.reduce(
    (prev, next) => ({
      ...prev,
      [next]: transactions.filter((t) => t.currency === next),
    }),
    {}
  );
};

export const getRates = async () => {
  // Would have an api call here
  // Getting CORS error for the Rates URL
  return {
    CAD_BTC: 0.00001716,
    BTC_CAD: 58257.33,
    CAD_ETH: 0.000233186952759646,
    ETH_CAD: 4288.4,
    USD_BTC: 0.00002166,
    BTC_USD: 46164.68,
    USD_ETH: 0.000294264779448547,
    ETH_USD: 3398.3,
    BTC_ETH: 13.585110718652357,
    ETH_BTC: 0.07361,
    CAD_USD: 0.79,
    USD_CAD: 1.26,
  };
};

export const getTransactions = async () => {
  const data = await fetch(TRANSACTIONS_URL);
  const res = await data.json();
  return transform(res);
};
