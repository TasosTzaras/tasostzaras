import { useState, useEffect } from "react";
import './CurrencyConverter.css'; // <- import the CSS file


const currency_codes = [
  "USD","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM",
  "BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP",
  "BYN","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK",
  "DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","FOK","GBP",
  "GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG",
  "HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY",
  "KES","KGS","KHR","KID","KMF","KRW","KWD","KYD","KZT","LAK","LBP","LKR",
  "LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR",
  "MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR",
  "PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF",
  "SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","SSP",
  "STN","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD",
  "TZS","UAH","UGX","UYU","UZS","VES","VND","VUV","WST","XAF","XCD","XDR",
  "XOF","XPF","YER","ZAR","ZMW","ZWL"
];

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState("");

  const getExchangeRate = async () => {
    setResult("Getting exchange rate...");
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/85ea57174104abcf9bb63de3/latest/${fromCurrency}`
      );
      const data = await response.json();
      const rate = data.conversion_rates[toCurrency];
      setResult(`${amount} ${fromCurrency} = ${(amount * rate).toFixed(2)} ${toCurrency}`);
    } catch (err) {
      setResult("Something went wrong...");
    }
  };

  useEffect(() => {
    getExchangeRate();
  }, []);

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getExchangeRate();
        }}
      >
        <div className="currency-row">
          <input
            type="number"
            value={amount}
            min="0"
            onChange={(e) => setAmount(e.target.value)}
          />
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {currency_codes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <span>→</span>
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {currency_codes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Convert</button>
      </form>
      <p className="result">{result}</p>
    </div>
  );
}
