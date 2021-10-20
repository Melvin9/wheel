import * as yup from "yup";

const DUMMY_DATA = [
  {
    id: 1,
    title: "How to claim the warranty",
    description:
      "Are you getting my texts???\" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting",
    tags: ["Getting Started"],
    contact: ""
  },
  {
    id: 2,
    title: "How to claim the warranty",
    description:
      "Are you getting my texts???\" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting",
    tags: ["Getting Started"],
    contact: ""
  },
  {
    id: 3,
    title: "How to claim the warranty",
    description:
      "Are you getting my texts???\" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting",
    tags: ["Getting Started", "Bugs"],
    contact: ""
  }
];
const ROLES = [
  {
    label: "Getting Started",
    value: "Getting Started"
  },
  {
    label: "Onboarding",
    value: "Onboarding"
  },
  {
    label: "User Flow",
    value: "User Flow"
  },
  {
    label: "UX",
    value: "UX"
  },
  {
    label: "Bugs",
    value: "Bugs"
  },
  {
    label: "V2",
    value: "V2"
  }
];
const CONTACTS = [
  {
    label: "Value One",
    value: "value1"
  },
  {
    label: "Value Two",
    value: "value2"
  }
];
const FORM_INITIAL_VALUES = {
  title: "",
  description: ""
};
const FORM_VALIDATE_NOTES = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  contact: yup
    .object({
      label: yup.string(),
      value: yup.string()
    })
    .required("Role required"),
  tags: yup.array().min(1).required("Tag required")
});
export {
  DUMMY_DATA,
  ROLES,
  CONTACTS,
  FORM_INITIAL_VALUES,
  FORM_VALIDATE_NOTES
};
