import { useEffect, useState } from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Modal from './components/Modal'

const API_KEY = '50323338-d99a3daef9001148f99f6ca32'
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=landscape&image_type=photo&per_page=15`

function App() {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [modalImg, setModalImg] = useState(null)

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits.map((img) => img.webformatURL))
      })
  }, [])

  const moveSlide = (dir) => {
    const containerWidth = document.querySelector('.carousel-container')?.clientWidth || 1000
    const imageWidth = 210
    const visibleImages = Math.floor(containerWidth / imageWidth)
    const maxSlide = images.length - visibleImages

    setCurrentSlide((prev) => {
      const newSlide = Math.min(Math.max(prev + dir, 0), maxSlide)
      return newSlide
    })
  }

  return (
    <>
      <Header />
      <Carousel
        images={images}
        currentSlide={currentSlide}
        moveSlide={moveSlide}
        onImageClick={setModalImg}
      />
      {modalImg && <Modal src={modalImg} onClose={() => setModalImg(null)} />}
    </>
  )
}

export default App
