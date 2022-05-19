import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Create, Home, Recipe, Search } from './views';
import { NavBar, ThemeSelector } from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ThemeSelector />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
