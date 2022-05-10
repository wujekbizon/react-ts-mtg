import { useQuery } from 'react-query';
import Loader from 'react-loaders';
import { Card } from '../Card/Card';
import SearchBar from './SearchBar/SearchBar';
import AnimatedLetters from '../AnimatedLetters/AnimatedLeters';
import { useState, useEffect } from 'react';
// Types
import { MtgCards } from '../../types/MtgCards';
import { Grid } from '@material-ui/core';
import { getAllCards } from '../../FetchCards';
// Styles
import './SearchMtg.scss';

const SearchMtg = () => {
  const { data, isLoading, status, error } = useQuery<MtgCards[]>(
    'cards',
    getAllCards
  );

  const [letterClass, setLetterClass] = useState('text-animate');
  const mtgArray = ['M', 'T', 'G', ' '];
  const searchArray = ['S', 'E', 'A', 'R', 'C', 'H'];

  useEffect(() => {
    async function wait() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000);
    }
    wait();
  }, []);

  const handleAddToDeck = (clickedCard: MtgCards) => {};

  if (isLoading) return <Loader type="pacman" active />;
  if (error) return <p>Error fetching data</p>;
  return (
    <div id="wrapper">
      <div className="ui container text-zone" id="search-bar">
        <div id="mtg">
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
        </div>

        <SearchBar />
      </div>

      {status === 'success' && (
        <Grid container spacing={3}>
          {data?.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
              <Card card={card} handleAddToDeck={handleAddToDeck} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default SearchMtg;
