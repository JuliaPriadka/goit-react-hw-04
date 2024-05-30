import { useState } from 'react';
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

  async function handleSearch(searchQuery) {
    if (searchQuery.trim() === '') {
      return;
    }

    try {
      setLoader(true);
      setErrorMsg(false);
      setNewData([]);
      const data = await getArticles(searchQuery);
      setNewData(data);
    } catch (error) {
      setErrorMsg(true);
    } finally {
      setLoader(false);
    }
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {errorMsg ? <ErrorMessage /> : <ImageGallery pictures={newData} />}
      {loader && (
        <MagnifyingGlass color="rgb(24, 24, 147)" glassColor="yellow" />
      )}
      {newData.length > 0 && <LoadMoreBtn />}
    </>
  );
}

export default App;
