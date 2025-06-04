const Carousel = ({ images, currentSlide, moveSlide, onImageClick }) => {
  const offset = -currentSlide * 210

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(${offset}px)` }}>
        {images.map((src, i) => (
          <img key={i} src={src} onClick={() => onImageClick(src)} />
        ))}
      </div>
      <button className="carousel-btn prev" onClick={() => moveSlide(-1)}>&#10094;</button>
      <button className="carousel-btn next" onClick={() => moveSlide(1)}>&#10095;</button>
    </div>
  )
}

export default Carousel
