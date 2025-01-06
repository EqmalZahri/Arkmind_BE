import { db } from '../db'
import { RowDataPacket } from 'mysql2'

// Get all items
export const getAllItems = async () => {
  const [rows] = await db.query('SELECT * FROM items')
  return rows
}

// Create an item
export const createItem = async (item: { name: string; description?: string; price: number }) => {
  const { name, description, price } = item
  const [result] = await db.query(
    'INSERT INTO items (name, description, price) VALUES (?, ?, ?)',
    [name, description || null, price]
  )
  return result
}

// Get an item by ID
export const getItemById = async (id: number) => {
  const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM items WHERE id = ?', [id])
  return rows[0]
}

// Update an item
export const updateItem = async (id: number, item: { name: string; description?: string; price: number }) => {
  const { name, description, price } = item
  await db.query(
    'UPDATE items SET name = ?, description = ?, price = ? WHERE id = ?',
    [name, description || null, price, id]
  )
}

// Delete an item
export const deleteItem = async (id: number) => {
  await db.query('DELETE FROM items WHERE id = ?', [id])
}