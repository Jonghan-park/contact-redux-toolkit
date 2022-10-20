import React from "react";
import Contact from "./Contact";
import { useSelector, useDispatch } from "react-redux";
import { clearContact } from "../features/contact/contactSlice";
import { openModal } from "../features/modal/modalSlice";
import AddContactModal from "./AddContactModal";

const Main = () => {
  const dispatch = useDispatch();
  const { contacts, total } = useSelector((state) => state.contact);
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <>
      {isOpen && (
        <div className="add_contact_container">
          <AddContactModal />
        </div>
      )}
      <div className="add_button">
        <button onClick={() => dispatch(openModal())}>Add Contact</button>
      </div>
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
