import CategoryRepository from '../repositories/CategoryRepository'
import { Category, CreateCategoryDto } from '../types/categoryTypes'

export default class CategoryService {
  static async create(data: CreateCategoryDto): Promise<Category> {
    return await CategoryRepository.create(data)
  }

  static async update(id: number, data: any) {
    return await CategoryRepository.update(id, data)
  }

  static async findAll(): Promise<Category[]> {
    return await CategoryRepository.findAll()
  }

  static async findById(id: number): Promise<Category | null> {
    return await CategoryRepository.findById(id)
  }
  static async delete(id: number): Promise<Category> {
    return await CategoryRepository.delete(id)
  }
  static async getProductsByCategory(id: number) {
    return await CategoryRepository.getProductsByCategory(id)
  }
}
