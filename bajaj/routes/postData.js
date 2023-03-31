const { application } = require('express')
const express=require('express')
const {func}=require('../controllers/main')
const router=express.Router()
router.route('/').post(func)
module.exports=router