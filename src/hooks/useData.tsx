import { useState, useEffect } from "react";

interface UseDataReturn<T> {
  data: T | undefined;
  status: string;
}

export function useData<T>(url: string): UseDataReturn<T> {
  const [data, setData] = useState<T | undefined>(undefined);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    let ignore = false;

    async function getData() {
      try {
        setStatus("loading");
        const res = await fetch(url);
        const json = await res.json();
        if (!ignore) {
          setData(json);
        }
      } catch (error) {
        setStatus("error");
      } finally {
        if (!ignore) {
          setStatus("success");
        }
      }
    }

    getData();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, status };
}
