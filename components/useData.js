"use client";

import { useState, useEffect } from "react";
import { Convert } from "easy-currencies";

export default function useData() {
  const [data, setData] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [symbol, setSymbol] = useState(null);
  const [rate, setRate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const value = await sessionStorage.getItem("sessionId");

    try {
      if (value) {
        const res = await fetch(`/api/userdata/${String(value)}`, {
          method: "GET",
        });

        if (res.ok) {
          const cdata = await res.json();
          setData(cdata);
          currencyData(cdata);
        }
      }
    } catch (error) {
      console.log(error);
      window.location.href = "/login";
    } finally {
      setDataLoading(false);
    }
  }

  async function currencyData(cdata) {
    try {
      if (cdata) {
        // setIsLoading(true);
        setError(null);

        const response = await fetch("/currencies.json");
        const currencyData = await response.json();

        const found = currencyData.find((x) =>
          x.currency.toLowerCase().includes(cdata?.country.toLowerCase()),
        );

        setSymbol(found?.symbol || null);

        if (found) {
          const value = await Convert(1).from("USD").to(found?.abbreviation);
          console.log("Rate: " + value);
          setRate(value);
        }

        // setIsLoading(false);
      }
    } catch (err) {
      setError(err.message);
      // setIsLoading(false);
    }
  }

  return {
    symbol,
    rate,
    // isLoading,
    error,
    data,
    dataLoading,
  };
}
