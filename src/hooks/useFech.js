import { useState, useEffect } from "react";

export default function useFetch(url, option) {
  // recive la url a donde hay que hacer el Fetch y las opciones
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // este useEffect es para hacer peticiones http donde lo necesitemos extrayendo los datos
    (async () => {
      try {
        const res = await fetch(url, option); //
        const json = await res.json();
        setResult(json);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [option, url]); // cuando actualice option o URL actualiza el useEffect

  return { loading, result, error };
}
