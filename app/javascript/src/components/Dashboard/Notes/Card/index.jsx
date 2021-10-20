import React from "react";

import { Typography } from "neetoui";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Card = ({ note, setSelectedNoteId, setShowDeleteAlert }) => {
  return (
    <>
      <div className="border border-gray-300 neeto-ui-shadow-s p-4 rounded w-full mt-3">
        <div className="border-b border-gray pb-3">
          <Header
            note={note}
            setSelectedNoteId={setSelectedNoteId}
            setShowDeleteAlert={setShowDeleteAlert}
          />
          <Body>
            <Typography style="body2">{note.description}</Typography>{" "}
          </Body>
        </div>
        <Footer tags={note.tags} />
      </div>
    </>
  );
};

export default Card;
