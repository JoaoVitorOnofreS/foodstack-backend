import ProductRepository from '../repositories/ProductRepository'
import {
  CreateProductDto,
  UpdateProductDto,
  Product,
} from '../types/productTypes'

export default class ProductService {
  static async create(data: CreateProductDto): Promise<Product> {
    return await ProductRepository.create(data)
  }

  static async findAll(): Promise<Product[]> {
    return await ProductRepository.findAll()
  }

  static async findById(id: number): Promise<Product | null> {
    return await ProductRepository.findById(id)
  }

  static async update(id: number, data: UpdateProductDto): Promise<Product> {
    return await ProductRepository.update(id, data)
  }

  static async delete(id: number): Promise<Product> {
    return await ProductRepository.delete(id)
  }
}
