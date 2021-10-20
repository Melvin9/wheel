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

export default function NewNotePane({ setNotes, showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  const handleSubmit = values => {
    setNotes(notes => {
      const newNote = {
        id: notes.length + 1,
        title: values.title,
        description: values.description,
        tags: values.tags.map(({ label }) => label),
        contact: values.tags.map(({ label }) => label)
      };
      return [...notes, newNote];
    });
    Toastr.success("Note added successfully");
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
        initialValues={FORM_INITIAL_VALUES}
        onSubmit={handleSubmit}
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
