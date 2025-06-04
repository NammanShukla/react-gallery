import Modal from 'react-modal'
Modal.setAppElement('#root') 

const ModalViewer = ({ src, onClose }) => {
  return (
    <Modal
      isOpen={!!src}
      onRequestClose={onClose}
      contentLabel="Image Viewer"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <span className="close" onClick={onClose}>&times;</span>
      <img src={src} className="modal-content" />
    </Modal>
  )
}

export default ModalViewer
