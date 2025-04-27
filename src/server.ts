import express from 'express'
import ProductRoutes from './routes/ProductRoutes'

const app = express()

app.use(express.json())
app.use('/products', ProductRoutes)

app.get('/', (req, res) => {
  res.send('Hello Woasahjrld!')
})

app.listen(3000, () => console.log('Server running on port 3000'))
