import { instance } from './scripts/Axios';
import { useState, useEffect } from 'react';
import Characters from './components/Characters';
import { GlobalStyle } from './styles/global';
import Button from './components/Button';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    instance
      .get(`/character/?page=${page}`)
      .then((res) => setCharacters(res.data.results))
      .catch((err) => err);
  }, [page]);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <main className="container">
      <GlobalStyle />
      <Characters characters={characters} />
      <div className="btnContainer">
        <Button onClick={previousPage} text="Previous" />
        <Button onClick={nextPage} text="Next" />
      </div>
    </main>
  );
};

export default App;
