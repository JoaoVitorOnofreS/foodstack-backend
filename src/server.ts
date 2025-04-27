import express from 'express'
import ProductRoutes from './routes/ProductRoutes'
import CategoryRoutes from './routes/categoryRoutes'

const app = express()

app.use(express.json())
app.use('/products', ProductRoutes)
app.use('/categories', CategoryRoutes)

app.get('/', (req, res) => {
  res.send('Hello Woasahjrld!')
})

app.listen(3000, () => console.log('Server running on port 3000'))
