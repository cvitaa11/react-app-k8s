import React from "react";
import { Modal } from "bootstrap";

const StatusModal = ({ show, handleHide, text }) => {
  return (
    <Modal show={show} onHide={handleHide} centered>
      <Modal.Title>Oops</Modal.Title>
      <Modal.Body>
        <p>{text}</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-outline-secondary"
          data-dismiss="modal"
          onClick={handleHide}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default StatusModal;
