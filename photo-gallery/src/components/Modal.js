const Modal = ({ src, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <span className="close" onClick={onClose}>&times;</span>
      <img className="modal-content" src={src} />
    </div>
  )
}

export default Modal
