import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Pane, Typography, Button, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import {
  FORM_INITIAL_VALUES,
  FORM_VALIDATE_CONTACTS,
  ROLE_OPTIONS
} from "./constants";

export default function NewContactPane({
  setContacts,
  showPane,
  setShowPane,
  contacts = [],
  selectedId = 0
}) {
  const onClose = () => setShowPane(false);
  let defaultValues = FORM_INITIAL_VALUES;
  if (selectedId) {
    const contact = contacts.filter(contact => contact.id === selectedId)[0];
    defaultValues = {
      firstName: contact?.firstName,
      lastName: contact?.lastName,
      role: contact?.role,
      email: contact?.email
    };
  }

  const handleCreate = values => {
    setContacts(contacts => {
      const newContact = {
        id: contacts[contacts.length - 1].id + 1,
        firstName: values.firstName,
        lastName: values.lastName,
        role: values.role,
        email: values.email
      };
      return [...contacts, newContact];
    });
    Toastr.success("Contact added successfully");
    onClose();
  };

  const handleEdit = values => {
    setContacts(contacts => {
      return contacts.map(contact => {
        if (contact.id === selectedId) {
          return {
            id: contact.id,
            firstName: values.firstName,
            lastName: values.lastName,
            role: values.role,
            email: values.email
          };
        }

        return contact;
      });
    });
    Toastr.success("Contact updated successfully");
    onClose();
  };
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Formik
        initialValues={defaultValues}
        onSubmit={selectedId ? handleEdit : handleCreate}
        validationSchema={FORM_VALIDATE_CONTACTS}
      >
        {({ isSubmitting }) => (
          <Form>
            <Pane.Body>
              <div className="w-full space-y-6">
                <div className="flex justify-between space-x-3">
                  <Input
                    className=""
                    label="First Name"
                    name="firstName"
                    placeholder="Enter first name"
                    required
                    size="small"
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter last name"
                    required
                    size="small"
                  />
                </div>

                <Input
                  label="Email Address"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  size="small"
                />
                <Select
                  label="Role"
                  name="role"
                  options={ROLE_OPTIONS}
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
