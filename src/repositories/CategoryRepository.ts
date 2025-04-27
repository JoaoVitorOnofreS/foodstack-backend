import prisma from '../client'

export default class CategoryRepository {
  static async findAll() {
    return await prisma.category.findMany()
  }

  static async findById(id: number) {
    return await prisma.category.findUnique({
      where: {
        id,
      },
    })
  }

  static async create(data: any) {
    return await prisma.category.create({
      data,
    })
  }

  static async update(id: number, data: any) {
    return await prisma.category.update({
      where: {
        id,
      },
      data,
    })
  }

  static async delete(id: number) {
    return await prisma.category.delete({
      where: {
        id,
      },
    })
  }

  static async getProductsByCategory(id: number) {
    return await prisma.product.findMany({
      where: {
        categoryId: id,
      },
    })
  }
}
