import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PrevArrow, NextArrow } from './Arrows'

const Carousel = ({ images, onImageClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } }
    ]
  }

  return (
    <div className="carousel-wrapper">
        <div className="carousel-container">
        <Slider {...settings}>
            {images.map((src, index) => (
            <div key={index} onClick={() => onImageClick(src)}>
                <img
                src={src}
                style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    cursor: 'pointer'
                }}
                />
            </div>
            ))}
        </Slider>
        </div>
    </div>
  )
}

export default Carousel
