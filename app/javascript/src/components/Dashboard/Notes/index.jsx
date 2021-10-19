import React, { useState, useEffect } from "react";

// import EmptyNotesListImage from "images/EmptyNotesList";
import { Search } from "@bigbinary/neeto-icons";
import { Button, PageLoader, Input } from "neetoui/v2";
import { Header, Container } from "neetoui/v2/layouts";

// import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

// import DeleteAlert from "./DeleteAlert";
import Card from "./Card";
import NewNotePane from "./NewNotePane";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  // const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  // const [notes, setNotes] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(true);
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    // try {
    //   setLoading(true);
    //   const response = await notesApi.fetch();
    //   setNotes(response.data.notes);
    // } catch (error) {
    //   logger.error(error);
    // } finally {
    //   setLoading(false);
    // }
    setLoading(false);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex flex-row w-full">
      <Menubar showMenu={toggleMenu} />
      <Container>
        <Header
          title="Notes"
          menuBarToggle={() => setToggleMenu(!toggleMenu)}
          actionBlock={
            <div className="flex ">
              <Input
                className="pr-2 w-96"
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search Name, Email, Phone Number,Etc. "
                size="small"
                value={searchTerm}
                prefix={<Search size={16} />}
              />
              <Button
                onClick={() => setShowNewNotePane(true)}
                label="Add Note"
                icon="ri-add-line"
              />
            </div>
          }
        />
        {/* {notes.length ? ( */}
        <>
          {/* <NoteTable
              selectedNoteIds={selectedNoteIds}
              setSelectedNoteIds={setSelectedNoteIds}
              notes={notes}
            /> */}
          <Card />
        </>
        {/* ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
          />
        )} */}
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          fetchNotes={fetchNotes}
        />
        {/* {showDeleteAlert && (
          <DeleteAlert
            selectedNoteIds={selectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
            refetch={fetchNotes}
          />
        )} */}
      </Container>
    </div>
  );
};

export default Notes;
