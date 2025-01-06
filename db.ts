import { createPool } from 'mysql2/promise'

export const db = createPool({
  host: 'localhost',
  user: 'root',  
  password: 'P@ssw0rd!',
  database: 'items_db', 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})
