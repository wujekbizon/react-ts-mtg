import './SearchMtg.scss';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../types/hooks';
import { setManaSymbol } from '../../state/homeSlice';
import { useFetch } from '../../hooks/useFetch';
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
  const [color, setColor] = useState(manaSymbol || 'red');
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
        <div className="btn-contanier">
          <Button onClick={prevPage}>Prev</Button>
          <span>{page}</span>
          <Button onClick={nextPage}>Next</Button>
        </div>

        <div className="select-container">
          <select
            value={color}
            name="color"
            id="color"
            onChange={handleSelectChange}
          >
            <option value="red">red</option>
            <option value="white">white</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="black">black</option>
          </select>
        </div>
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
