"use client";

import { useState, useEffect } from "react";

export default function useData() {
  const [data, setData] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await fetch(`/api/userdata/`, {
        method: "GET",
      });

      if (res.ok) {
        const cdata = await res.json();
        setData(cdata);
      }
    } catch (error) {
      console.log(error);
      window.location.href = "/login";
    } finally {
      setDataLoading(false);
    }
  }

  return { data, dataLoading };
}
