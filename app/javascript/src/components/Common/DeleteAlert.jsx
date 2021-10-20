import React from "react";

import { Modal, Typography, Button, Toastr } from "neetoui";
import PropTypes from "prop-types";

const DeleteAlert = ({ func, type, onClose, selectedId }) => {
  const handleDelete = () => {
    func(items => items.filter(item => selectedId !== item.id));
    Toastr.success(`${type} deleted successfully`);
    onClose();
  };
  return (
    <Modal isOpen size="large" onClose={onClose}>
      <Modal.Header>
        <Typography style="h2">Delete {type}</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          Are you sure you want to delete the {type.toLowerCase()}? This action
          cannot be undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button label="Continue" onClick={handleDelete} size="large" />
        <Button style="text" label="Cancel" onClick={onClose} size="large" />
      </Modal.Footer>
    </Modal>
  );
};
DeleteAlert.propTypes = {
  func: PropTypes.func,
  type: PropTypes.string,
  onClose: PropTypes.func,
  selectedId: PropTypes.number
};
export default DeleteAlert;
