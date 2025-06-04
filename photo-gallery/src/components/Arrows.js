import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev" onClick={onClick}>
    <FaChevronLeft />
  </button>
)

export const NextArrow = ({ onClick }) => (
  <button className="custom-arrow next" onClick={onClick}>
    <FaChevronRight />
  </button>
)
