import { Route, Routes } from 'react-router-dom';
// Components
import Layout from './components/Layout';
import Home from './components/Home/Home';
// Styles
import './App.scss';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
