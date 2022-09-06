import { useQuery } from 'react-query';
import Loader from 'react-loaders';
import { Card } from '../Card/Card';
import SearchBar from './SearchBar/SearchBar';
import AnimatedLetters from '../AnimatedLetters/AnimatedLeters';
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import CollectionsIcon from '@mui/material';
import { Badge } from '@mui/material';
import { Drawer } from '@mui/material';
// Types
import { MtgCards } from '../../types/MtgCards';
import { Grid } from '@mui/material';
import { getAllCards } from '../../FetchCards';
// Styles
import './SearchMtg.scss';
import Collection from '../Collection/Collection';
import axios from 'axios';

const SearchMtg = () => {
  const [cartOpen, isCartOpen] = useState(false);
  const [letterClass, setLetterClass] = useState('text-animate');
  const { data, isLoading, status, error } = useQuery<MtgCards[]>(
    'cards',
    getAllCards
  );
  const [cardsData, setCardsData] = useState(data);
  const [page, setPage] = useState(1);
  const [color, setColor] = useState('red');

  // const mtgArray = ['M', 'T', 'G', ' '];
  // const searchArray = ['S', 'E', 'A', 'R', 'C', 'H'];

  // useEffect(() => {
  //   async function wait() {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover');
  //     }, 4000);
  //   }
  //   wait();
  // }, []);

  useEffect(() => {
    const fetchCards = async () => {
      const { data } = await axios.get(
        `https://api.scryfall.com/cards/search?q=c%3A${color}`,
        {
          params: {
            page,
          },
        }
      );
      setCardsData(data.data);
    };

    fetchCards();
  }, [isLoading, page, color]);

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
    setColor(target.value);
  };

  if (isLoading) return <Loader type="pacman" active />;
  if (error) return <p>Error fetching data</p>;
  return (
    <div id="wrapper">
      <div className="ui container text-zone" id="search-bar">
        {/* <div id="mtg">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={mtgArray}
              idx={3}
            />
          </h1>
        </div>
        <div id="search">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={searchArray}
              idx={6}
            />
          </h1>
        </div> */}

        <SearchBar />
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
        <select name="color" id="color" onChange={handleChange}>
          <option value="red">red</option>
          <option value="white">white</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="black">black</option>
        </select>
      </div>
      <Drawer anchor="right" open={cartOpen} onClose={() => isCartOpen(false)}>
        <Collection />
      </Drawer>
      <IconButton className="icon-button" onClick={() => isCartOpen(true)}>
        <Badge>
          {/* <CollectionsIcon fontSize="large" color="error" /> */}
        </Badge>
      </IconButton>

      {status === 'success' && (
        <Grid container spacing={3}>
          {cardsData?.map((card) => {
            return (
              <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                <Card card={card} handleAddToDeck={handleAddToDeck} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default SearchMtg;
