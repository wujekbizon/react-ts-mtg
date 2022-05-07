import { useQuery } from 'react-query';
import LinearIndeterminate from '../../LinearIndeterminate';
import { Card } from '../Card/Card';
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

  const handleAddToDeck = (clickedCard: MtgCards) => {};

  if (isLoading) return <LinearIndeterminate />;
  if (error) return <p>Error fetching data</p>;
  return (
    <div id="wrapper">
      <h1>MTG SEARCH</h1>
      {status === 'success' && (
        <Grid container spacing={3}>
          {data?.map((card) => (
            <Grid item key={card.id} xs={12} sm={4}>
              <Card card={card} handleAddToDeck={handleAddToDeck} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default SearchMtg;
