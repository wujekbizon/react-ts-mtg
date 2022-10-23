import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../types/hooks';
import {
  getCardsStart,
  getCardsSuccess,
  getCardsFailure,
} from '../state/cardsSlice';

export const useFetch = () => {
  const { searchQuery, manaSymbol } = useAppSelector((state) => state.home);
  const { dataList } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();
  const urlSearchByColor = `https://api.scryfall.com/cards/search?q=c%3A${manaSymbol}`;
  const urlQuery = `https://api.scryfall.com/cards/search?q=${searchQuery}`;
  const [page, setPage] = useState(1);

  const { has_more, total_cards, data } = dataList;

  const _lastPage = Math.floor(total_cards / data.length);

  const nextPage = () => {
    if (has_more) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const firstPage = () => {
    setPage(1);
  };

  const lastPage = () => {
    setPage(_lastPage + 1);
  };

  const getData = async () => {
    dispatch(getCardsStart());
    try {
      const { data } = await axios(urlSearchByColor, {
        params: {
          page,
        },
      });
      dispatch(getCardsSuccess(data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(getCardsFailure(error.message));
      } else {
        console.log('Unexpected error', error);
      }
    }
  };

  const getDataByQuery = async () => {
    dispatch(getCardsStart());
    try {
      const { data } = await axios(urlQuery);
      dispatch(getCardsSuccess(data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(getCardsFailure(error.message));
      } else {
        console.log('Unexpected error', error);
      }
    }
  };

  useEffect(() => {
    if (manaSymbol) {
      getData();
    }
    // eslint-disable-next-line
  }, [page, manaSymbol]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        getDataByQuery();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  return { nextPage, prevPage, page, setPage, firstPage, lastPage };
};
