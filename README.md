# 📚 Express Book Store

A RESTful API for managing a book store — built with **Express.js v5**, **Drizzle ORM**, and **PostgreSQL**, containerized with Docker.

---

## 🧱 Tech Stack

| Layer     | Technology              |
| --------- | ----------------------- |
| Runtime   | Node.js                 |
| Framework | Express.js v5           |
| ORM       | Drizzle ORM             |
| Database  | PostgreSQL 17.4         |
| Container | Docker & Docker Compose |
| Config    | dotenv                  |

---

## 📁 Project Structure

```
Express-Book-Store/
├── controller/
│   └── rootcontroller.js       # Route controllers / handler logic
├── db/
│   └── index.js                # Database connection (Drizzle + pg)
├── drizzle/                    # Auto-generated Drizzle migrations
│   └── logger.js               # Drizzle query logger
├── model/
│   ├── author.model.js         # Author schema/model
│   ├── book.model.js           # Book schema/model
│   └── index.js                # Model exports
├── routes/
│   └── book.routes.js          # Book-related API routes
├── .env                        # Environment variables (not committed)
├── .gitignore
├── docker-compose.yml          # PostgreSQL Docker service
├── drizzle.config.js           # Drizzle ORM configuration
├── index.js                    # App entry point
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/) & Docker Compose

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/express-book-store.git
cd express-book-store
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL=postgresql://postgres:admin@localhost:5432/book-store
PORT=3000
```

### 4. Start the database

```bash
docker-compose up -d
```

This spins up a PostgreSQL 17.4 instance:

| Config   | Value        |
| -------- | ------------ |
| Host     | `localhost`  |
| Port     | `5432`       |
| Database | `book-store` |
| User     | `postgres`   |
| Password | `admin`      |

### 5. Run database migrations

```bash
npx drizzle-kit migrate
```

### 6. Start the server

```bash
npm start
```

The server starts with `--watch` mode (auto-restarts on file changes).  
Default: **http://localhost:3000**

---

## 📡 API Endpoints

### Books

| Method   | Endpoint     | Description       |
| -------- | ------------ | ----------------- |
| `GET`    | `/books`     | Get all books     |
| `GET`    | `/books/:id` | Get a book by ID  |
| `POST`   | `/books`     | Create a new book |
| `PUT`    | `/books/:id` | Update a book     |
| `DELETE` | `/books/:id` | Delete a book     |

### Authors

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| `GET`  | `/authors`     | Get all authors     |
| `GET`  | `/authors/:id` | Get an author by ID |
| `POST` | `/authors`     | Create a new author |

> Update this section as you add more routes.

---

## 🛠️ Drizzle ORM Commands

```bash
# Generate a new migration from schema changes
npx drizzle-kit generate

# Apply pending migrations
npx drizzle-kit migrate

# Open Drizzle Studio (database GUI)
npx drizzle-kit studio
```

---

## 🐳 Docker Reference

```bash
# Start PostgreSQL in background
docker-compose up -d

# Stop the container
docker-compose down

# Stop and remove volumes (wipes database)
docker-compose down -v
```

---

## 📦 Scripts

```bash
npm start       # Start server with --watch (auto-reload)
```

---

## 🌿 Environment Variables

| Variable       | Description                  | Example                                                 |
| -------------- | ---------------------------- | ------------------------------------------------------- |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:admin@localhost:5432/book-store` |
| `PORT`         | Port the server listens on   | `3000`                                                  |

---

## 📄 License

This project is licensed under the **ISC License**.
