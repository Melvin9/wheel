import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { Button } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";
import * as yup from "yup";

export default function NewNoteForm({ onClose, refetch }) {
  const handleSubmit = () => {
    refetch();
    onClose();
    //handle Submit
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
        description: yup.string().required("Description is required")
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
          <div className="nui-pane__footer nui-pane__footer--absolute">
            <div className="flex place-items-start">
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
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
