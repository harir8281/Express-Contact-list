const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET/api/contacts
//@access public
const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
};

//@desc create a new contact'
//@route POST/api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("req body is", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("all feilds are mandatory");
  }
  const contacts = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contacts);
});

//@desc get a contact
//@route GET/api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  res.status(200).json(contact);
});

//@desc update a new contact
//@route PUT/api/contacts
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//@desc delete a new contact
//@route DELETE/api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
};
