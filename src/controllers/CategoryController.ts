import { Request, Response, Router } from 'express'
import CategoryService from '../services/CategoryService'

export default class CategoryController {
  static async getAllCategories(req: Request, res: Response) {
    const categories = await CategoryService.findAll()
    res.json({
      data: categories,
      code: 200,
    })
  }

  static async createCategory(req: Request, res: Response) {
    const { name } = req.body
    const category = await CategoryService.create({ name })
    res.json({
      data: category,
      code: 201,
      message: 'Categoria criada com sucesso',
    })
  }

  static async getCategoryById(req: Request, res: Response) {
    const { id } = req.params
    const category = await CategoryService.findById(Number(id))
    res.json({
      data: category,
      code: 200,
    })
  }

  static async updateCategory(req: Request, res: Response) {
    const { id } = req.params
    const { name } = req.body
    const category = await CategoryService.update(Number(id), { name })
    res.json({
      data: category,
      code: 200,
      message: 'Categoria atualizada com sucesso',
    })
  }

  static async deleteCategory(req: Request, res: Response) {
    const { id } = req.params
    const category = await CategoryService.delete(Number(id))
    res.json({
      code: 200,
      message: 'Categoria deletada com sucesso',
    })
  }

  static async getProductsByCategory(req: Request, res: Response) {
    const { id } = req.params
    const products = await CategoryService.getProductsByCategory(Number(id))
    res.json({
      data: products,
      code: 200,
    })
  }
}
