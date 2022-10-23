import './SearchMtg.scss';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../types/hooks';
import { setManaSymbol } from '../../state/homeSlice';
import { useFetch } from '../../hooks/useFetch';
import { inputs } from '../../data';
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
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
  const { dataList, isError, isLoading } = useAppSelector(
    (state) => state.cards
  );
  const dispatch = useAppDispatch();
  const { page, prevPage, nextPage, setPage, firstPage, lastPage } = useFetch();
  const [cartOpen, setCartOpen] = useState(false);
  const { total_cards, data, has_more } = dataList;
  const handleAddToDeck = (clickedCard: MtgCards) => {};

  const handleSelectChange = (e: React.FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement;
    setPage(1);
    dispatch(setManaSymbol(target.value));
  };

  useEffect(() => {}, []);

  if (isLoading)
    return (
      <section className="loading-container">
        <h1>Loading...</h1>
      </section>
    );

  return (
    <main className="search background">
      <div className="search-container">
        <SearchBar />
        {isError && <h1>Error fetching data</h1>}
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
                  className={
                    value === manaSymbol ? 'active-input input' : 'input'
                  }
                />

                <img src={imgSrc} alt="mana" />
                {title}
              </div>
            );
          })}
          {/* <div>
            <Button>Advanced Search</Button>
          </div> */}
        </div>
      </div>
      {!isError && (
        <div className="search-info">
          {has_more && (
            <p>
              <strong>
                {data.length * page + 1 - data.length} - {data.length * page} of{' '}
                {total_cards} cards
              </strong>
              <span> where the color is {manaSymbol}</span>
            </p>
          )}
          {!has_more && (
            <p>
              <strong>
                {total_cards - data.length + 1} - {total_cards} of {total_cards}{' '}
                cards
              </strong>
              <span> where the color is {manaSymbol}</span>
            </p>
          )}
        </div>
      )}
      {!isError && (
        <div className="btn-contanier">
          <Button onClick={firstPage} disabled={page === 1}>
            <FirstPageIcon fontSize="large" />
          </Button>
          <Button onClick={prevPage} disabled={page === 1}>
            {'<'} Previous
          </Button>
          <Button onClick={nextPage} disabled={!has_more}>
            Next {has_more ? data.length : ''} {'>'}
          </Button>
          <Button onClick={lastPage} disabled={!has_more}>
            <LastPageIcon fontSize="large" />
          </Button>
        </div>
      )}
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
        {!isError && (
          <Grid container spacing={1}>
            {data?.map((card) => {
              return (
                <Grid item key={card.id} xs={12} sm={4} md={3} lg={2}>
                  <Card card={card} handleAddToDeck={handleAddToDeck} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </div>
      {!isError && data.length > 18 && (
        <div className="btn-contanier">
          <Button onClick={firstPage} disabled={page === 1}>
            <FirstPageIcon fontSize="large" />
          </Button>
          <Button onClick={prevPage} disabled={page === 1}>
            {'<'} Previous
          </Button>
          <Button onClick={nextPage} disabled={!has_more}>
            Next {has_more ? data.length : ''} {'>'}
          </Button>
          <Button onClick={lastPage} disabled={!has_more}>
            <LastPageIcon fontSize="large" />
          </Button>
        </div>
      )}
    </main>
  );
};

export default SearchMtg;
