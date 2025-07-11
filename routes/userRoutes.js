import express from 'express'
import { homeController } from '../controllers/mainController.js'
const router = express.Router()

// Set routes related to home
router.get('/', homeController)

export default router
