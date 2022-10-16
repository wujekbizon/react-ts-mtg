import './SearchMtg.scss';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../types/hooks';
// import { useQuery } from 'react-query';
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
import { getAllCards } from '../../FetchCards';
import { setManaSymbol } from '../../state/homeSlice';

const SearchMtg = () => {
  const { manaSymbol } = useAppSelector((state) => state.home);
  const dispatch = useAppDispatch();
  // const { data, isLoading, status, error } = useQuery<MtgCards[]>(
  //   'blue',
  //   getAllCards
  // );
  const [cartOpen, setCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cardsData, setCardsData] = useState<MtgCards[]>([]);
  const [page, setPage] = useState(1);
  const [color, setColor] = useState(manaSymbol || 'red');

  useEffect(() => {
    // const fetchCards = async () => {
    //   setIsLoading(true);
    //   const { data } = await axios.get(
    //     `https://api.scryfall.com/cards/search?q=c%3A${color}`,
    //     {
    //       params: {
    //         page,
    //       },
    //     }
    //   );
    //   setIsLoading(false);
    //   setCardsData(data.data);
    // };

    const fetch = async () => {
      const resp = await getAllCards(page, manaSymbol);
      setIsLoading(false);
      console.log(resp);
      setCardsData(resp);
    };
    fetch();
  }, [page, manaSymbol]);

  const handleAddToDeck = (clickedCard: MtgCards) => {};

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    dispatch(setManaSymbol(color));
  }, [color, dispatch]);

  const handleChange = (e: React.FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement;
    setPage(1);
    setColor(target.value);
  };

  if (isLoading) return <h1>Loading...</h1>;
  // if (error) return <p>Error fetching data</p>;
  return (
    <main className="search background">
      <div className="search-container">
        <SearchBar />
        <div className="btn-contanier">
          <Button onClick={prevPage}>Prev</Button>
          <span>{page}</span>
          <Button onClick={nextPage}>Next</Button>
        </div>

        <div className="select-container">
          <select value={color} name="color" id="color" onChange={handleChange}>
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
          {cardsData?.map((card) => {
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
