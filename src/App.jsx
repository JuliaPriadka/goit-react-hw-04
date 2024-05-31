import { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import getArticles from './articles-api';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import ErrorMessage from './Components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './Components/LoadMoreBtn/LoadMoreBtn';

function App() {
  const [newData, setNewData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    async function getPictures() {
      if (query.trim() === '') {
        return;
      }

      try {
        setLoader(true);
        setErrorMsg(false);
        const { results, total_pages } = await getArticles(query, page);
        setNewData(prevData => [...prevData, ...results]);
        setShowBtn(total_pages && total_pages !== page);
      } catch (error) {
        setErrorMsg(true);
      } finally {
        setLoader(false);
      }
    }
    getPictures();
  }, [query, page]);

  async function handleSearch(searchQuery) {
    setNewData([]);
    setQuery(searchQuery);
    setPage(1);
  }

  function onLoadMoreBtnClick() {
    setPage(page + 1);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {errorMsg ? <ErrorMessage /> : <ImageGallery pictures={newData} />}
      {loader && (
        <MagnifyingGlass color="rgb(24, 24, 147)" glassColor="yellow" />
      )}
      {showBtn && <LoadMoreBtn onLoadMoreBtnClick={onLoadMoreBtnClick} />}
    </>
  );
}

export default App;
