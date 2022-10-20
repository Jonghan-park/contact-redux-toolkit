import React from "react";
import { useDispatch } from "react-redux";
import { clearContact } from "../features/contact/contactSlice";

const Contact = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <>
      {contacts.map((contact) => {
        return (
          <div className="contact_item">
            <img
              className="contact_image"
              src={contact.img}
              alt={contact.name}
            />
            <h1 className="contact_name">Name: {contact.name}</h1>
            <h3 className="contact_phone">Phone: {contact.phone}</h3>
          </div>
        );
      })}
      <button onClick={() => dispatch(clearContact())}>Clear Contact</button>
    </>
  );
};

export default Contact;
