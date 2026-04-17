# 📚 Express Book Store API

A RESTful API built with **Node.js** and **Express.js** for managing a collection of books.  
This project demonstrates core backend concepts such as routing, request handling, validation, and CRUD operations.

---

## 🚀 Features

- Retrieve all books
- Retrieve a book by ID
- Add a new book with validation
- Delete a book by ID
- Proper error handling with HTTP status codes

---

## 🛠️ Tech Stack

- **Backend:** Node.js
- **Framework:** Express.js
- **Language:** JavaScript

---

## 📂 Project Structure

```
Express-Book-Store/
│
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/express-book-store.git
```

2. Navigate to the project folder:

```bash
cd express-book-store
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node index.js
```

---

## 🌐 API Endpoints

### 📖 Get all books

```
GET /books
```

---

### 🔍 Get book by ID

```
GET /books/:id
```

---

### ➕ Add a new book

```
POST /books
```

#### Request Body

```json
{
  "title": "Book Name",
  "author": "Author Name"
}
```

---

### ❌ Delete a book

```
DELETE /books/:id
```

---

## ⚠️ Error Handling

| Status Code | Description                 |
| ----------- | --------------------------- |
| 200         | Success                     |
| 201         | Resource created            |
| 400         | Bad request (invalid input) |
| 404         | Resource not found          |

---

## 🧪 Example Usage

### Create a book

```bash
curl -X POST http://localhost:8000/books \
-H "Content-Type: application/json" \
-d '{"title":"Atomic Habits","author":"James Clear"}'
```

---

## 📌 Future Improvements

- Add update functionality (PUT/PATCH)
- Connect to a database (MongoDB)
- Add authentication
- Improve project structure (MVC pattern)

---
