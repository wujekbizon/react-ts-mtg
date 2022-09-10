import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import SearchMtg from './pages/Search/SearchMtg';
import DeckBuild from './pages/Deck/DeckBuild';
import { Sidebar } from './components';

const App = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchMtg />} />
        <Route path="/deck" element={<DeckBuild />} />
      </Routes>
    </>
  );
};

export default App;
