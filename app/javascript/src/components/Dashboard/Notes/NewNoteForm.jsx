import React from "react";

import { Formik, Form } from "formik";
import { Button, Input, Select } from "neetoui/v2";
import * as yup from "yup";

import notesApi from "apis/notes";

export default function NewNoteForm({ onClose, refetch }) {
  const handleSubmit = async values => {
    try {
      await notesApi.create(values);
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };
  return (
    <Formik
      initialValues={{
        title: "",
        description: ""
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required"),
        contact: yup.string().required("Assigned contact is required"),
        tags: yup.string().required("Tag is required")
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input
            className=""
            label="Title"
            name="title"
            placeholder="Enter Title"
            required
            size="small"
          />
          <Input
            className="pt-4"
            label="Description"
            name="description"
            placeholder="Enter note description"
            required
            size="large"
          />
          <Select
            className="pt-4"
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
            size="small"
          />
          <Select
            className="pt-4"
            isMulti
            label="Tags"
            name="tags"
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
            size="small"
          />
          <div className="nui-pane__footer nui-pane__footer--absolute">
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="secondary"
            />

            <Button
              type="submit"
              label="Submit"
              size="large"
              style="primary"
              className="ml-2"
              disabled={isSubmitting}
              loading={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
