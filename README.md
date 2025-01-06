# Backend - Items Management API README

This is the backend for the Items Management API, providing CRUD operations for managing items.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or later)
- npm (version 6 or later)
- MySQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/EqmalZahri/Arkmind_BE.git
   cd <file-location>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the database variables:
   - Modify `db.ts` file in the root directory.
   - Add the following variables:
     ```env
     PORT=3000
     DB_HOST=<your-database-host>
     DB_USER=<your-database-username>
     DB_PASSWORD=<your-database-password>
     DB_NAME=<your-database-name>
     ```

4. Manually set up the database:
   - Create a database using your preferred database management tool (eg:- MySQL Workbench).
   - Import the provided SQL file `items_db_items.sql` (located in the `project directory/backup_db/items_db_items.sql`) into your database.

5. Start the server:
   ```bash
   npx ts-node app.ts
   ```

6. Access API documentation:
   - Open your browser and go to `http://localhost:3000`.
   - It will automatically navigate to `http://localhost:3000/api-docs` to view API documentation powered by Swagger.


## API Endpoints

| Method | Endpoint               | Description           |
|--------|------------------------|-----------------------|
| GET    | `/api/items`           | Get all items         |
| GET    | `/api/items/:id`       | Get item by ID        |
| POST   | `/api/items`           | Create a new item     |
| PUT    | `/api/items/:id`       | Update an item        |
| DELETE | `/api/items/:id`       | Delete an item        |


## Features
- Create, Read, Update, Delete (CRUD) API Endpoints operations for items
- database using MySQL
- Validate incoming requests using Zod
- Modular & scalable project structure

## Additional Notes

### Known Issues
- No automated migrations. Database setup must be done manually.
- Error messages are generic; detailed error handling can be improved.

### Future Enhancements
- Implement database migrations using a tool like Knex.js, Sequelize, TypeORM or Prisma.
- Add unit and integration tests.
- Improve error handling and logging.
- Add authentication and authorization for API endpoints.
- Add .env file to stored sensitive information (eg:- database credentials)
- Deploy using Docker or a cloud service.

---

