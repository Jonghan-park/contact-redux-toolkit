import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { addContact } from "../features/contact/contactSlice";

const AddContactModal = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="modal_container">
      <div className="modal">
        <div className="modal_title">
          <h1>Add Contact</h1>
        </div>
        <form className="modal_form">
          <div className="modal_name">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              required
              id="name"
              placeholder="Enter a name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="modal_phone">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              required
              id="phone"
              placeholder="Enter a phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="modal_image">
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              required
              id="image"
              placeholder="Enter a image url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="modal_button_container">
            <button
              className="modal_add_button"
              onClick={() => dispatch(addContact({ name, phone, image }))}
            >
              Add
            </button>
            <button
              className="modal_cancel_button"
              onClick={() => dispatch(closeModal())}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContactModal;
