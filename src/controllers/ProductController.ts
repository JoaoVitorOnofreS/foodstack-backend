import ProductService from '../services/ProductService'
import { Request, Response } from 'express'

export class ProductController {
  static async getAllProducts(req: Request, res: Response) {
    const products = await ProductService.findAll()
    res.json({
      data: products,
      code: 200,
    })
  }

  static async getProductById(req: Request, res: Response | any) {
    const { id } = req.params
    if (!id) {
      return res.status(400).json({
        code: 400,
        message: 'ID é obrigatório',
      })
    }
    const product = await ProductService.findById(Number(id))
    res.json({
      data: product,
      code: 200,
    })
  }

  static async createProduct(req: Request, res: Response) {
    const { name, price, description, imageUrl, categoryId } = req.body
    console.log(req.body)
    const product = await ProductService.create({
      name,
      price,
      description,
      imageUrl,
      categoryId,
    })

    res.json({
      data: product,
      code: 201,
      message: 'Produto criado com sucesso',
    })
  }

  static async updateProduct(req: Request, res: Response | any) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({
        code: 400,
        message: 'ID é obrigatório',
      })
    }
    const { name, price, description, imageUrl, categoryId } = req.body
    const product = await ProductService.update(Number(id), {
      name,
      price,
      description,
      imageUrl,
      categoryId,
    })
    res.json({
      data: product,
      code: 200,
      message: 'Produto atualizado com sucesso',
    })
  }

  static async deleteProduct(req: Request, res: Response | any) {
    const { id } = req.params
    if (!id) {
      return res.status(400).json({
        code: 400,
        message: 'ID é obrigatório',
      })
    }
    const product = await ProductService.delete(Number(id))
    res.json({
      data: product,
      code: 200,
      message: 'Produto deletado com sucesso',
    })
  }
}
