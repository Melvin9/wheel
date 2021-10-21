import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Pane, Typography, Button, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import {
  CONTACTS,
  FORM_INITIAL_VALUES,
  FORM_VALIDATE_NOTES,
  ROLES
} from "./constants";

export default function NewNotePane({
  setNotes,
  showPane,
  setShowPane,
  notes = [],
  selectedId = 0
}) {
  const onClose = () => setShowPane(false);
  let defaultValues = FORM_INITIAL_VALUES;
  if (selectedId !== 0) {
    const note = notes.filter(note => note.id === selectedId)[0];
    defaultValues = {
      title: note?.title,
      description: note?.description,
      tags: note?.tags?.map(label => {
        return { label, value: label };
      }),
      contact: note?.contact
    };
  }
  const handleCreate = values => {
    setNotes(notes => {
      const newNote = {
        id: notes[notes.length - 1] + 1,
        title: values.title,
        description: values.description,
        tags: values.tags.map(({ label }) => label),
        contact: values.contact
      };
      return [...notes, newNote];
    });
    Toastr.success("Note added successfully");
    onClose();
  };
  const handleEdit = values => {
    setNotes(notes => {
      return notes.map(note => {
        if (note.id === selectedId) {
          return {
            id: note.id,
            title: values.title,
            description: values.description,
            tags: values.tags.map(({ label }) => label),
            contact: values.contact
          };
        }

        return note;
      });
    });
    Toastr.success("Note updated successfully");
    onClose();
  };

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Formik
        initialValues={defaultValues}
        onSubmit={selectedId ? handleEdit : handleCreate}
        validationSchema={FORM_VALIDATE_NOTES}
      >
        {({ isSubmitting }) => (
          <Form>
            <Pane.Body>
              <div className="w-full space-y-6">
                <Input
                  className=""
                  label="Title"
                  name="title"
                  placeholder="Enter Title"
                  required
                  size="small"
                />
                <Input
                  label="Description"
                  name="description"
                  placeholder="Enter note description"
                  required
                  size="large"
                />
                <Select
                  isClearable
                  isSearchable
                  label="Assigned Contact"
                  name="contact"
                  options={CONTACTS}
                  placeholder="Select Role"
                  required
                  size="small"
                />
                <Select
                  isMulti
                  label="Tags"
                  name="tags"
                  options={ROLES}
                  placeholder="Select Role"
                  required
                  size="small"
                />
              </div>
            </Pane.Body>
            <Pane.Footer className="flex items-center space-x-2">
              <Button
                iconPosition="right"
                icon={Check}
                type="submit"
                label="Save Changes"
                size="large"
                style="primary"
                className="ml-2"
                disabled={isSubmitting}
                loading={isSubmitting}
              />
              <Button
                onClick={onClose}
                label="Cancel"
                size="large"
                style="secondary"
              />
            </Pane.Footer>
          </Form>
        )}
      </Formik>
    </Pane>
  );
}
