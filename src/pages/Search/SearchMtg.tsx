import './SearchMtg.scss';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../types/hooks';
import { setManaSymbol } from '../../state/homeSlice';
import { useFetch } from '../../hooks/useFetch';
import { inputs } from '../../data';
import {
  Card,
  SearchBar,
  Collection,
  ManaSymbol,
  Button,
} from '../../components';
import { IconButton } from '@mui/material';
import { Badge } from '@mui/material';
import { Drawer } from '@mui/material';
import { Grid } from '@mui/material';
import { MtgCards } from '../../types/MtgCards';

const SearchMtg = () => {
  const { manaSymbol } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [color, setColor] = useState(manaSymbol || 'colorless');
  const [query, setQuery] = useState('');
  const { loading, data, error } = useFetch(color, page, query);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    dispatch(setManaSymbol(color));
  }, [color, dispatch]);

  const handleAddToDeck = (clickedCard: MtgCards) => {};

  const nextPage = () => {
    if (page >= 29) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page <= 1) {
      setPage(29);
    } else {
      setPage(page - 1);
    }
  };

  const handleInputChange = (e: React.FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement;
    setQuery(target.value);
  };

  const handleSelectChange = (e: React.FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement;
    setPage(1);
    setColor(target.value);
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error fetching data</h1>;
  return (
    <main className="search background">
      <div className="search-container">
        <SearchBar query={query} handleChange={handleInputChange} />

        <div className="select-container">
          <div className="search-title">
            <svg
              focusable="false"
              aria-hidden="true"
              width="95"
              height="88"
              viewBox="0 0 95 88"
            >
              <g fill="#FFF" fillRule="evenodd">
                <path d="M47 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM80 53c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM65 88c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM28 88c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM15 54c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-7c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"></path>
              </g>
            </svg>
            <h4>Search by Mana Color</h4>
          </div>
          {inputs.map((input) => {
            const { id, value, title, imgSrc } = input;
            return (
              <div className="input-container" key={id}>
                <input
                  type="checkbox"
                  value={value}
                  onChange={handleSelectChange}
                  className={color === value ? 'active-input input' : 'input'}
                />

                <img src={imgSrc} alt="mana" />
                {title}
              </div>
            );
          })}
          <div>
            <Button>Advanced Search</Button>
          </div>
        </div>
      </div>
      <div className="btn-contanier">
        <Button onClick={prevPage}>Prev</Button>
        <span>{page}</span>
        <Button onClick={nextPage}>Next</Button>
      </div>
      <div className="drawer">
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Collection />
        </Drawer>
        <IconButton className="icon-button" onClick={() => setCartOpen(true)}>
          <Badge>
            <ManaSymbol />
          </Badge>
        </IconButton>
      </div>
      <div className="grid-contaniner">
        <Grid container spacing={3}>
          {data?.map((card) => {
            return (
              <Grid item key={card.id} xs={12} sm={6} md={4} lg={2}>
                <Card card={card} handleAddToDeck={handleAddToDeck} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </main>
  );
};

export default SearchMtg;
