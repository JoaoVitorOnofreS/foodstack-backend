import { Router } from 'express'
import { ProductController } from '../controllers/ProductController'

const router = Router()

router.get('/', ProductController.getAllProducts)
router.get('/:id', ProductController.getProductById)
router.post('/createProduct', ProductController.createProduct)
router.put('/updateProduct/:id', ProductController.updateProduct)
router.delete('/deleteProduct/:id', ProductController.deleteProduct)

export default router
