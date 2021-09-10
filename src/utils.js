const CURRENCY_MAP = {
  CAD: {
    name: "Dollar",
    iconUrl:
      "https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-dollar-money-currency-those-icons-lineal-color-those-icons-7.png",
  },
  BTC: {
    name: "Bitcoin",
    iconUrl: "https://img.icons8.com/office/16/000000/bitcoin.png",
  },
  ETH: {
    name: "Ethereum",
    iconUrl: "https://img.icons8.com/color/48/000000/ethereum.png",
  },
};

export const getCurrrencyName = (curr) => {
  return CURRENCY_MAP[curr].name;
};

export const getCurrrencyIcon = (curr) => {
  return CURRENCY_MAP[curr].iconUrl;
};

export const calculateBalance = (transactions) => {
  return (
    Number(
      transactions
        .filter((t) => t.direction === "credit")
        .reduce((prev, next) => Number(prev) + Number(next.amount), 0)
    ) -
    Number(
      transactions
        .filter((t) => t.direction === "debit")
        .reduce((prev, next) => Number(prev) + Number(next.amount), 0)
    )
  ).toFixed(2);
};

export const convertToDollar = (currency, amount, rates) => {
  if (currency === "CAD") {
    return Number(amount).toFixed(2);
  }

  if (!rates[`${currency}_CAD`]) {
    return 0;
  }

  const rate = rates[`${currency}_CAD`];

  return Number(amount * rate).toFixed(2);
};
