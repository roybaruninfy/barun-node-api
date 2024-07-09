const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  postContact,
  putContact,
  deleteContact,
} = require("../controllers/contactControllers");
const validateToken = require("../middlewares/validateTokenHandler");

// validate all the contact routes at one go
router.use(validateToken);
// validate all the contact routes at one go

// @desc: get method for the contact list
// @desc: post method for the contact list
router.route("/").get(getContacts).post(postContact);

// @desc: get method for the contact list with id
// @desc: put method for the contact list
// @desc: delete method for the contact list
router.route("/:id").get(getContact).put(putContact).delete(deleteContact);

module.exports = router;
