import './SearchMtg.scss';
import { useState, useEffect } from 'react';
// import { useQuery } from 'react-query';
import axios from 'axios';
import { Card, SearchBar, Collection } from '../../components';
import { IconButton } from '@mui/material';
import { Badge } from '@mui/material';
import { Drawer } from '@mui/material';
import { Grid } from '@mui/material';
import { MtgCards } from '../../types/MtgCards';
// import { getAllCards } from '../../FetchCards';
// import paginate from '../../utils/utils';

const SearchMtg = () => {
  // const { data, isLoading, status, error } = useQuery<MtgCards[]>(
  //   'blue',
  //   getAllCards
  // );
  const [cartOpen, setCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cardsData, setCardsData] = useState<MtgCards[]>([]);
  const [page, setPage] = useState(1);
  const [color, setColor] = useState('red');

  useEffect(() => {
    const fetchCards = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.scryfall.com/cards/search?q=c%3A${color}`,
        {
          params: {
            page,
          },
        }
      );
      setIsLoading(false);
      setCardsData(data.data);
    };

    fetchCards();
  }, [page, color]);

  const handleAddToDeck = (clickedCard: MtgCards) => {};

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page < 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };

  const handleChange = (e: React.FormEvent<EventTarget>): void => {
    let target = e.target as HTMLInputElement;
    setPage(1);
    setColor(target.value);
  };

  if (isLoading) return <h1>Loading...</h1>;
  // if (error) return <p>Error fetching data</p>;
  return (
    <main className="search">
      <div className="inner-flex">
        <SearchBar />
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
        <select value={color} name="color" id="color" onChange={handleChange}>
          <option value="red">red</option>
          <option value="white">white</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="black">black</option>
        </select>

        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Collection />
        </Drawer>
        <IconButton className="icon-button" onClick={() => setCartOpen(true)}>
          <Badge></Badge>
        </IconButton>

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
