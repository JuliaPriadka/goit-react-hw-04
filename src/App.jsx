import { useEffect, useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import './App.css';
import SearchBar from './comp/SearchBar/SearchBar';
import getArticles from './articles-api';
import ImageGallery from './comp/ImageGallery/ImageGallery';
import ErrorMessage from './comp/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './comp/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './comp/ImageModal/ImageModal';

function App() {
  const [newData, setNewData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [showBtn, setShowBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

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

  function handleSearch(searchQuery) {
    setNewData([]);
    setQuery(searchQuery);
    setPage(1);
  }

  function onLoadMoreBtnClick() {
    setPage(page + 1);
  }

  function openModal(image) {
    setModalImage(image);
    setIsModalOpen(true);
  }

  function closeModal() {
    setModalImage(null);
    setIsModalOpen(false);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {errorMsg ? (
        <ErrorMessage />
      ) : (
        <ImageGallery pictures={newData} openModal={openModal} />
      )}
      {loader && (
        <MagnifyingGlass color="rgb(24, 24, 147)" glassColor="yellow" />
      )}
      {showBtn && <LoadMoreBtn onLoadMoreBtnClick={onLoadMoreBtnClick} />}
      {isModalOpen && (
        <ImageModal
          onRequestClose={closeModal}
          isOpen={isModalOpen}
          fullSrc={modalImage.urls.regular}
          alt={modalImage.alt_description}
        />
      )}
    </>
  );
}

export default App;
