import React from "react";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Card = () => {
  return (
    <div className="border border-gray-300 neeto-ui-shadow-s p-4 rounded w-full">
      <div className="border-b border-gray pb-3">
        <Header />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Card;
