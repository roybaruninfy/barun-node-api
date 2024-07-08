const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  postContact,
  putContact,
  deleteContact,
} = require("../controllers/contactControllers");

// @desc: get method for the contact list
// @desc: post method for the contact list
router.route("/").get(getContacts).post(postContact);

// @desc: get method for the contact list with id
// @desc: put method for the contact list
// @desc: delete method for the contact list
router.route("/:id").get(getContact).put(putContact).delete(deleteContact);

module.exports = router;
