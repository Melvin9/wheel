import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Search } from "neetoicons";
import { Button, PageLoader, Input, Pagination } from "neetoui";
import { Header, Container, Scrollable } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

import { DUMMY_CONTACT } from "./constants";
import ContactTable from "./ContactTable";
import NewContactPane from "./NewContactPane";

import DeleteAlert from "../../Common/DeleteAlert";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactId, setSelectedContactId] = useState([]);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(true);
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setContacts(DUMMY_CONTACT);
    setLoading(false);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex flex-row w-full">
      <Menubar showMenu={toggleMenu} type="contacts" />
      <Container>
        <Header
          title="Contacts"
          menuBarToggle={() => setToggleMenu(!toggleMenu)}
          actionBlock={
            <div className="flex">
              <Input
                className="pr-2 w-80"
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search Name, Email, Phone Number,Etc. "
                size="small"
                value={searchTerm}
                prefix={<Search size={16} />}
              />
              <Button
                onClick={() => setShowNewContactPane(true)}
                label="Add Contact"
                icon="ri-add-line"
              />
            </div>
          }
        />
        {contacts.length ? (
          <>
            <Scrollable className="w-full">
              <>
                <ContactTable
                  contacts={contacts}
                  setSelectedContactId={setSelectedContactId}
                  setShowDeleteAlert={setShowDeleteAlert}
                />
              </>
            </Scrollable>
            <div className="flex flex-row items-center justify-end w-full mt-6 mb-8">
              <Pagination
                count={300}
                pageNo={1}
                pageSize={25}
                navigate={() => {}}
              />
            </div>
          </>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewContactPane(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewContactPane
          showPane={showNewContactPane}
          setShowPane={setShowNewContactPane}
          setContacts={setContacts}
        />
        {showDeleteAlert && (
          <DeleteAlert
            type="Contact"
            selectedId={selectedContactId}
            onClose={() => setShowDeleteAlert(false)}
            func={setContacts}
          />
        )}
      </Container>
    </div>
  );
};

export default Contacts;
