# Prisma + Express User API

This project is a REST API built with Express and Prisma to manage users in a `UserLanguage` table.

## Requirements

- Node.js installed
- A working PostgreSQL/Prisma database URL in `.env`
- Dependencies installed:

```bash
npm install
```

## How to run the server

1. Apply migrations:

```bash
npx prisma migrate dev --name create_userlanguage_table
```

2. Seed test data (10-20 users):

```bash
npx prisma db seed
```

3. Start the server:

```bash
npm run dev
```

The server runs on:

```text
http://localhost:3000
```

## What new routes were created

- `GET /userlanguages`
  - Returns all users.
- `GET /userlanguages/:language`
  - Returns users who speak the given language.
- `POST /userlanguages`
  - Creates a new user.
  - Body: `name`, `email`, `languages`, `age`.
- `PUT /userlanguages/:email`
  - Updates `languages` for a user found by email.
- `DELETE /userlanguages`
  - Deletes users under 18 years old.
  - Returns how many users were deleted.

## How to test routes

Use `curl` in a second terminal while the server is running.

### 1) Get all users

```bash
curl http://localhost:3000/userlanguages
```

### 2) Get users by language

```bash
curl http://localhost:3000/userlanguages/English
```

### 3) Create a new user

```bash
curl -X POST http://localhost:3000/userlanguages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "testuser@example.com",
    "languages": ["Spanish", "English"],
    "age": 23
  }'
```

### 4) Update user languages by email

```bash
curl -X PUT http://localhost:3000/userlanguages/juan@example.com \
  -H "Content-Type: application/json" \
  -d '{
    "languages": ["Spanish", "English", "German"]
  }'
```

### 5) Delete users under 18

```bash
curl -X DELETE http://localhost:3000/userlanguages
```

## Optional: check data with Prisma Studio

```bash
npx prisma studio
```
