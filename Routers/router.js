import express from 'express'

import { registerUser,loginUser, forgetPassword, resetPassword, getUserDetail } from '../Controller/usercontroller.js'
const router= express.Router()

router.post('/login',loginUser)
router.post('/register',registerUser)
router.post('/forget-password',forgetPassword)
// router.post('/reset-password/:token', resetPassword);
router.get('/getuser',getUserDetail)
router.put('/reset-password/:token', resetPassword);

export default router;