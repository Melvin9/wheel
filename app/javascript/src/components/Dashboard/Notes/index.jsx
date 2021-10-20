import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Search } from "neetoicons";
import { Button, PageLoader, Input } from "neetoui";
import { Header, Container } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

import Card from "./Card";
import { DUMMY_DATA } from "./constants";
import NewNotePane from "./NewNotePane";

import DeleteAlert from "../../Common/DeleteAlert";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteId, setSelectedNoteId] = useState([]);
  const [notes, setNotes] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(true);
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setNotes(DUMMY_DATA);
    setLoading(false);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="flex flex-row w-full">
      <Menubar showMenu={toggleMenu} type="notes" />
      <Container>
        <Header
          title="Notes"
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
                onClick={() => setShowNewNotePane(true)}
                label="Add Note"
                icon="ri-add-line"
              />
            </div>
          }
        />
        {notes.length ? (
          <>
            {notes.map(note => (
              <Card
                key={note.id}
                note={note}
                setSelectedNoteId={setSelectedNoteId}
                setShowDeleteAlert={setShowDeleteAlert}
              />
            ))}
          </>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          setNotes={setNotes}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteId={selectedNoteId}
            onClose={() => setShowDeleteAlert(false)}
            setNotes={setNotes}
          />
        )}
      </Container>
    </div>
  );
};

export default Notes;
