import express from 'express'
import { userLogin, userSignup } from './controller.js'

const router = express.Router()

/** --- set routes here in the router itself --- */
router.get('/login', userLogin)
router.get('/signup', userSignup)

export default router
