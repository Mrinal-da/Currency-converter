import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/971b4cf3c135279dede03987/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res?.conversion_rates);
      });
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
