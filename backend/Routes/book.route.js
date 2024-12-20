import express from "express";
import { Book } from "../Models/booksModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const book = await Book.findById(id);
    res.json({
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndUpdate(
      id,
      req.body
    );
    if (!book) {
      return res
        .status(404)
        .send("book not found");
    } else {
      res.json({ data: book });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndDelete(id);
    res.json("Book deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    if (
      req.body.title &&
      req.body.author &&
      req.body.publishYear
    ) {
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
      };

      const book = await Book.create(newBook);
      res.status(201).send(book);
    } else {
      res.status(400).send({
        message: "Send all required fields",
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});
export default router;
