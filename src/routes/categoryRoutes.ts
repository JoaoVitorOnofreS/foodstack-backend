import { Router } from 'express'
import CategoryController from '../controllers/CategoryController'

const router = Router()

router.get('/', CategoryController.getAllCategories)
router.post('/createCategory', CategoryController.createCategory)
router.get('/:id', CategoryController.getCategoryById)
router.put('/updateCategory/:id', CategoryController.updateCategory)
router.delete('/deleteCategory/:id', CategoryController.deleteCategory)
router.get('/:id/products', CategoryController.getProductsByCategory)

export default router
