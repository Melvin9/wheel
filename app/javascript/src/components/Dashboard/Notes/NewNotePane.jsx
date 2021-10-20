import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { Pane, Typography, Button } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";
import * as yup from "yup";

import { ROLES } from "./constants";

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
        initialValues={{
          title: "",
          description: ""
        }}
        onSubmit={handleSubmit}
        validationSchema={yup.object({
          title: yup.string().required("Title is required"),
          description: yup.string().required("Description is required")
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <Pane.Body>
              <div className="w-full">
                <Input
                  className=""
                  label="Title"
                  name="title"
                  placeholder="Enter Title"
                  required
                  size="small"
                />
                <Input
                  className="pt-6"
                  label="Description"
                  name="description"
                  placeholder="Enter note description"
                  required
                  size="large"
                />
                <Select
                  className="pt-6"
                  isClearable
                  isSearchable
                  label="Assigned Contact"
                  name="contact"
                  options={[
                    {
                      label: "Value One",
                      value: "value1"
                    },
                    {
                      label: "Value Two",
                      value: "value2"
                    }
                  ]}
                  placeholder="Select Role"
                  required
                  size="small"
                />
                <Select
                  className="pt-6"
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
