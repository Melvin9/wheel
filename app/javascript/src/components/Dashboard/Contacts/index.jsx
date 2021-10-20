import React, { useState, useEffect } from "react";

import { Search } from "neetoicons";
import { Button, PageLoader, Input, Pagination } from "neetoui";
import { Header, Container, Scrollable } from "neetoui/layouts";

import Menubar from "components/Common/Menubar";

import { DUMMY_CONTACT } from "./constants";
import ContactTable from "./ContactTable";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
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
              <Button label="Add Contact" icon="ri-add-line" />
            </div>
          }
        />
        <Scrollable className="w-full">
          <>
            <ContactTable contacts={contacts} />
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
      </Container>
    </div>
  );
};

export default Contacts;
