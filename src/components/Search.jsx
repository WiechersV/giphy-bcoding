import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import {
  Grid,
  SearchBar,
  SearchContext
} from '@giphy/react-components';

import GifCarousel from './GifCarousel';

const Search = () => {
  const { fetchGifs, searchKey } = useContext(SearchContext)
  const [chosenGif, setChosenGif] = useState(null)
  
  const onGifClick = (gif) => {
    setChosenGif(gif);
  }

  const onCloseModal = () => {
    setChosenGif(null)
  }

  return (
    <>
      <SearchBar />
      <Grid
        fetchGifs={fetchGifs}
        key={searchKey}
        width={800}
        columns={4}
        gutter={12}
        onGifClick={onGifClick}
        noLink
      />
      <Modal isOpen={chosenGif !== null} onRequestClose={onCloseModal} preventScroll>
        <span onClick={onCloseModal} className="modal__close-button">X</span>
        <GifCarousel
          gif={chosenGif}
          fetchGifs={fetchGifs}
          searchKey={searchKey}
          onGifClick={onGifClick}
        />
      </Modal>
    </>
  );
}

export default Search