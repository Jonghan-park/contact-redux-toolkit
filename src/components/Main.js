import React from "react";
import Contact from "./Contact";
import { useSelector, useDispatch } from "react-redux";
import { clearContact } from "../features/contact/contactSlice";

const Main = () => {
  const dispatch = useDispatch();
  const { contacts, total } = useSelector((state) => state.contact);
  return (
    <>
      <div className="main_container">
        <Contact contacts={contacts} />
      </div>
      <div className="button_container">
        <div className="total_contact">
          <h3>Total: {total}</h3>
        </div>
        <button onClick={() => dispatch(clearContact())}>Clear Contact</button>
      </div>
    </>
  );
};

export default Main;
