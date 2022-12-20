import React from 'react'
import {
  Gif,
  Carousel,
} from '@giphy/react-components'

import './GifCarousel.css'

const GifCarousel = ({ gif, searchKey, onGifClick, fetchGifs }) => {
  return(
    <div className="modal__container">
      {gif && <Gif
        gif={gif}
      />}
      <Carousel
        gifHeight={200}
        gutter={12}
        key={searchKey}
        onGifClick={onGifClick}
        fetchGifs={fetchGifs}
        noLink
      />
    </div>
  )
}

export default GifCarousel;