import prisma from '../client'
import { CreateProductDto } from '../types/productTypes'

export default class ProductRepository {
  static async findAll() {
    return await prisma.product.findMany()
  }

  static async findById(id: number) {
    return await prisma.product.findUnique({
      where: {
        id,
      },
    })
  }

  async create(data: CreateProductDto) {
    return await prisma.product.create({
      data,
    })
  }

  static async update(id: number, data: any) {
    return await prisma.product.update({
      where: {
        id,
      },
      data,
    })
  }

  static async delete(id: number) {
    return await prisma.product.delete({
      where: {
        id,
      },
    })
  }

  static async create(data: CreateProductDto) {
    return await prisma.product.create({
      data,
    })
  }
}
