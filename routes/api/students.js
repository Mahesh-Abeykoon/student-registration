// routes/api/books.js

const express = require("express");
const router = express.Router();

// Load Book model
const Student = require("../../models/Student");

// @route GET api/books/test
// @description tests books route

router.get("/test", (req, res) => res.send("Student route testing!"));

// @route GET api/books
// @description Get all books

router.get("/", (req, res) => {
  Student.find()
    .then((student) => res.json(student))
    .catch((err) => res.status(404).json({ nobooksfound: "No Student found" }));
});

// @route GET api/books/:id
// @description Get single book by id

router.get("/:id", (req, res) => {
  Student.findById(req.params.id)
    .then((student) => res.json(student))
    .catch((err) => res.status(404).json({ nobookfound: "No Student found" }));
});

// @route GET api/books
// @description add/save book

router.post("/", (req, res) => {
  Student.create(req.body)
    .then((student) =>
      res.json({
        STATUS: "Student Add menu",
        MESSAGE: "Student added successfully",
      })
    )
    .catch((err) => res.status(400).json({ error: "Unable to add the Student" }));
});

// @route GET api/books/:id
// @description Update book

router.put("/:id", (req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body)
    .then((student) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/books/:id
// @description Delete book by id

router.delete("/:id", (req, res) => {
  Student.findByIdAndRemove(req.params.id, req.body)
    .then((student) => res.json({ mgs: "Student deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a Student" }));
});

module.exports = router;
