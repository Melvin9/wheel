import * as yup from "yup";

const DUMMY_CONTACT = [
  {
    id: 1,
    firstName: "Ronald",
    lastName: "Richards",
    role: { label: "Owner", value: "Owner" },
    email: "albert@borer.com",
    createdAt: "Feb, 5, 2021"
  },
  {
    id: 2,
    firstName: "Jacob",
    lastName: "Johns",
    role: { label: "Owner", value: "Owner" },
    email: "albert@borer.com",
    createdAt: "Feb, 5, 2021"
  },
  {
    id: 3,
    firstName: "Ronald",
    lastName: "Richards",
    role: { label: "Owner", value: "Owner" },
    email: "albert@borer.com",
    createdAt: "Feb, 5, 2021"
  },
  {
    id: 4,
    firstName: "Jacob",
    lastName: "Johns",
    role: { label: "Owner", value: "Owner" },
    email: "albert@borer.com",
    createdAt: "Feb, 5, 2021"
  }
];

const DEFAULT_CREATED_AT = "Feb, 5, 2021";

const FORM_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: ""
};

const FORM_VALIDATE_CONTACTS = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  role: yup
    .object({
      label: yup.string(),
      value: yup.string()
    })
    .required("Role required"),
  email: yup.string().email().required("Email is required")
});

const ROLE_OPTIONS = [
  {
    label: "Owner",
    value: "Owner"
  },
  {
    label: "Admin",
    value: "Admin"
  }
];

export {
  DUMMY_CONTACT,
  FORM_INITIAL_VALUES,
  FORM_VALIDATE_CONTACTS,
  ROLE_OPTIONS,
  DEFAULT_CREATED_AT
};
