import prisma from '../src/client'

async function main() {
  const user = await prisma.user.create({
    data: {
      email: '0t3Y6@example.com',
      name: 'John Doe',
      password: '12345678',
    },
  })

  console.log(user)

  const product = await prisma.product.create({
    data: {
      name: 'Pasta',
      price: 5.99,
      description: 'Pasta',
      imageUrl:
        'https://images.unsplash.com/photo-1525547719571-a2d4ac94d3f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
  })

  console.log(product)

  const category = await prisma.category.create({
    data: {
      name: 'Pasta',
    },
  })

  const order = await prisma.order.create({
    data: {
      customer: 'John Doe',
      total: 5.99,
      status: 'PENDING',
    },
  })
}

main()
  .then(() => {
    console.log('Done')
  })
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
