const { BOOKS } = require("../model/book");
exports.showall = (req, res) => {
  res.setHeader("x-piy", "TeerthoRoyCh");
  res.json(BOOKS);
};

exports.pickid = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: `Id must be of type INT` });
  }
  const book = BOOKS.find((e) => e.id === id);

  if (!book) {
    return res.status(404).json({ error: `Book with ${id} does not exist` });
  }
  return res.json(book);
};

exports.addit = (req, res) => {
  const { title, author } = req.body;
  if (!title || title === "") {
    return res.status(400).json({ error: "title is required" });
  }
  if (!author || author === "") {
    return res.status(400).json({ error: `Author name is required` });
  }

  const book = { id: BOOKS.length + 1, title, author };
  BOOKS.push(book);

  return res.status(201).json({ message: `Book created success`, id: book.id });
};

exports.delit = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).end("Id should be an integer");
  }
  const booktodel = BOOKS.findIndex((num) => num.id === id);
  if (booktodel < 0) {
    return res.status(404).json({ error: `Book with id ${id} does not exist` });
  }
  BOOKS.splice(booktodel, 1);
  return res.status(200).json({ message: "Book deleted" });
};
