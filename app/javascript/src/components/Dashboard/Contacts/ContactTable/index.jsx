import React from "react";

import Header from "./Header";
import Row from "./Row";

const ContactTable = ({
  contacts,
  setSelectedContactId,
  setShowDeleteAlert
}) => {
  return (
    <table
      className={`neeto-ui-table neeto-ui-table--checkbox neeto-ui-table--actions`}
    >
      <Header />
      <tbody>
        {contacts.map((contact, index) => (
          <Row
            key={index}
            contact={contact}
            setSelectedContactId={setSelectedContactId}
            setShowDeleteAlert={setShowDeleteAlert}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
