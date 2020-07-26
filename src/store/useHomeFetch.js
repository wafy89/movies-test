import { useState, useEffect } from "react";
import {
  API_URL,
  API_KEY,
} from "../config";

export const useHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovie = async (ApiUrl) => {
    setError(false);
    setLoading(true);
    const page = ApiUrl.search('page');

    try {
      const result = await (await fetch(ApiUrl)).json();
      console.log("results", result);
      setState((prev) => ({
        ...prev,
        movies:  page !== -1 ? [...prev.movies, ...result.results] : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (err) {
      setError(true);
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovie(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);

  return [{ state, loading, error }, fetchMovie];
};
