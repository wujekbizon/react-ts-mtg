import { useState, useEffect } from 'react';
import { MtgCards } from '../types/MtgCards';
import axios from 'axios';

export const useFetch = (color?: string, page?: number, query?: string) => {
  const urlSearchByColor = `https://api.scryfall.com/cards/search?q=c%3A${color}`;
  const urlQuery = `https://api.scryfall.com/cards/search?q=${query}`;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<MtgCards[]>([]);
  const [error, setError] = useState('');

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios(urlSearchByColor, {
        params: {
          page,
        },
      });

      setData(data.data);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        console.log('Unexpected error', error);
      }
    }
  };

  const getDataByQuery = async () => {
    // setLoading(true);
    try {
      const { data } = await axios(urlQuery);
      setData(data.data);
      // setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unexpected error', error);
      }
    }
  };

  useEffect(() => {
    if (color) {
      getData();
    }
    // eslint-disable-next-line
  }, [page, color]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        getDataByQuery();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [query]);

  return { loading, data, error };
};
