import React from "react";

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
          <Body description={note.description} />
        </div>
        <Footer tags={note.tags} />
      </div>
    </>
  );
};

export default Card;
