import { Request, Response, NextFunction } from 'express';
import { getAllItems, createItem, getItemById, updateItem, deleteItem } from '../services/item.service';
import { z } from 'zod';

const itemSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  description: z.string().max(500).optional(),
  price: z.number().positive(),
})

// Get all items controller
export const getAllItemsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await getAllItems()
    res.status(200).json(items)
  } catch (err) {
    next(err)
  }
}

// Create an item controller
export const createItemController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = itemSchema.parse(req.body)
    const result = await createItem(item)
    res.status(201).json(result)
  } catch (err) {
    next(err)
  }
}

// Get an item by ID controller
export const getItemByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const item = await getItemById(Number(req.params.id))
    if (!item) {
      res.status(404).json({ error: 'Item not found' })
    } else {
      res.status(200).json(item)
    }
  } catch (err) {
    next(err)
  }
}

// Update an item controller
export const updateItemController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const item = itemSchema.parse(req.body)
    await updateItem(Number(req.params.id), item)
    res.status(204).send()
  } catch (err) {
    next(err)
  }
}

// Delete an item controller
export const deleteItemController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await deleteItem(Number(req.params.id))
    res.status(204).send()
  } catch (err) {
    next(err)
  }
}