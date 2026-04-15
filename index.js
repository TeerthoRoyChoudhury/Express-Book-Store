const express = require("express");
const app = express();
const port = 8000;

// IN MEMORY DATABASE
const books = [
  {
    id: 1,
    title: "Book One",
    author: "Author One",
  },
  {
    id: 2,
    title: "Book two",
    author: "Author Two",
  },
];

// Middlewares (Plugins)
app.use(express.json());

// Routes
app.get("/books", (req, res) => {
  res.setHeader("x-piy", "TeerthoRoyCh");
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: `Id must be of type INT` });
  }
  const book = books.find((e) => e.id === id);

  if (!book) {
    return res.status(404).json({ error: `Book with ${id} does not exist` });
  }
  return res.json(book);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || title === "") {
    return res.status(400).json({ error: "title is required" });
  }
  if (!author || author === "") {
    return res.status(400).json({ error: `Author name is required` });
  }

  const book = { id: books.length + 1, title, author };
  books.push(book);

  return res.status(201).json({ message: `Book created success`, id: book.id });
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).end("Id should be an integer");
  }
  const booktodel = books.findIndex((num) => num.id === id);
  if (booktodel < 0) {
    return res.status(404).json({ error: `Book with id ${id} does not exist` });
  }
  books.splice(booktodel, 1);
  return res.status(200).json({ message: "Book deleted" });
});

app.listen(port, () => {
  console.log(`HTTP is running on PORT ${port}`);
});
