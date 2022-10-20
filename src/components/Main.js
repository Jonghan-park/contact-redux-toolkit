import React from "react";
import Contact from "./Contact";
import { useSelector } from "react-redux";

const Main = () => {
  const { contacts } = useSelector((state) => state.contact);
  return (
    <>
      <div className="main_container">
        <Contact contacts={contacts} />
      </div>
    </>
  );
};

export default Main;
