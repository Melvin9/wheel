import React from "react";

import { Modal, Typography, Button, Toastr } from "neetoui/v2";

export default function DeleteAlert({ setNotes, onClose, selectedNoteId }) {
  const handleDelete = () => {
    setNotes(notes => notes.filter(note => selectedNoteId !== note.id));
    Toastr.success("Deleted Note Successfully");
    onClose();
  };
  return (
    <Modal isOpen size="large" onClose={onClose}>
      <Modal.Header>
        <Typography style="h2">Delete Note</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          Are you sure you want to delete the note? This action cannot be
          undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button label="Continue" onClick={handleDelete} size="large" />
        <Button style="text" label="Cancel" onClick={onClose} size="large" />
      </Modal.Footer>
    </Modal>
  );
}
