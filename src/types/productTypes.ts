export interface Product {
  id: number
  name: string
  price: number
  description: string | null
  imageUrl: string | null
  categoryId: number | null
  createdAt: Date
}

export interface CreateProductDto {
  name: string
  price: number
  description: string
  imageUrl: string
  categoryId: number
}

export interface UpdateProductDto {
  name?: string
  price?: number
  description?: string
  imageUrl?: string
  categoryId?: number
}
