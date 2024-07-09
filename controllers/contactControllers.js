const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc: get method for the contact list  /api/contacts
const getContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contact);
});

// @desc: get method for the contact list with id
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

// @desc: post method for the contact list
const postContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    //throw new Error("All fields are mandatory");
    throw new Error("enter all the details");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(200).json(contact);
});

// @desc: put method for the contact list
const putContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  // restrict one loggedin user to update another user contact list
  if (contact.user_id.toString() != req.user.id) {
    res.status(403);
    throw new Error(
      "user don't have permission to update other user's contact info"
    );
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

// @desc: delete method for the contact list

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  // restrict one loggedin user to delete another user contact list
  if (contact.user_id.toString() != req.user.id) {
    res.status(403);
    throw new Error(
      "user don't have permission to delete other user's contact info"
    );
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});
module.exports = {
  getContacts,
  getContact,
  postContact,
  putContact,
  deleteContact,
};
