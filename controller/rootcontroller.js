const db = require("../db/index");
const bookstable = require("../model/book.model");
const { eq } = require("drizzle-orm");

exports.showall = async (req, res) => {
  const book = await db.select().from(bookstable);
  return res.json(book);
};

exports.pickid = async (req, res) => {
  try {
    const id = req.params.id;
    const [book] = db
      .select()
      .from(bookstable)
      .where(eq(bookstable.id, id))
      .limit(1);

    if (!book) {
      res.status(404).json({ message: "Book Not Found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addit = async (req, res) => {
  const { title, authorId, description } = req.body;
  if (!title || title === "") {
    return res.status(400).json({ error: "title is required" });
  }
  const [result] = await db
    .insert(bookstable)
    .values({
      title,
      authorId,
      description,
    })
    .returning({
      id: bookstable.id,
    });
  return res
    .status(201)
    .json({ message: `Book created success`, id: result.id });
};

exports.delit = async (req, res) => {
  const id = parseInt(req.params.id);

  const deleted = await db.delete(bookstable).where(eq(bookstable.id, id));
  if (deleted.length === 0) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.status(200).json({ task: "Successfully deleted" });
};
