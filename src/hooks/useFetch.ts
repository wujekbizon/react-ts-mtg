import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../types/hooks';
import {
  getCardsStart,
  getCardsSuccess,
  getCardsFailure,
} from '../state/cardsSlice';

export const useFetch = (color?: string) => {
  const { searchQuery, page } = useAppSelector((state) => state.home);
  const { next_page } = useAppSelector((state) => state.cards.dataList);
  const dispatch = useAppDispatch();
  const urlSearchByColor = `https://api.scryfall.com/cards/search?q=c%3A${color}`;
  const urlQuery = `https://api.scryfall.com/cards/search?q=${searchQuery}`;

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
    if (color) {
      getData();
    }
    // eslint-disable-next-line
  }, [page, color]);

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
};
