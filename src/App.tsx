import { Route, Routes } from 'react-router-dom';
// Components
import Layout from './components/Layout';
import Home from './components/Home/Home';
// Styles
import './App.scss';
import SearchMtg from './components/Search/SearchMtg';
import DeckBuild from './components/Deck/DeckBuild';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<SearchMtg />} />
          <Route path="/deck" element={<DeckBuild />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
