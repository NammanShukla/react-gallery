import { useEffect, useState } from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import ModalViewer from './components/Modal'

const API_KEY = '50323338-d99a3daef9001148f99f6ca32'
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=landscape&image_type=photo&per_page=15`

function App() {
  const [images, setImages] = useState([])
  const [modalImg, setModalImg] = useState(null)

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits.map((img) => img.webformatURL))
      })
  }, [])

  return (
    <>
      <Header />
      <Carousel images={images} onImageClick={setModalImg} />
      <ModalViewer src={modalImg} onClose={() => setModalImg(null)} />
    </>
  )
}

export default App
