const express = require("express");
const app = express();
const bookRouter = require("./routes/book.routes");
const port = 8000;
const { logger_middleware } = require("./middleware/logger");

// Middlewares (Plugins)
app.use(express.json());

app.use(logger_middleware);

// Routes
app.use("/books", bookRouter);

app.listen(port, () => {
  console.log(`HTTP is running on PORT ${port}`);
});
