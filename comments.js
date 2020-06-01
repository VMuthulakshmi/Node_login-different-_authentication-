const express=require('express')
const router=express.Router()
const passport=require('passport')
let auth=require('./auth')
//if any error occured then it was handled by the paassport authentication
router.route('/')
.get(passport.authenticate('jwt', { session: false }),(req,res)=>{
    res.json({message:"inside comments"})
})


module.exports=router