const express = require('express')
const router = express.Router()
const _ = require("lodash")
const validator = require('validator');
const sqlFn = require('../mysql')
const validatorInput = (data) => {
    let errors = {}
    if (validator.isEmpty(data.username)) {
        errors.username = "请填写用户名"
    }
    if (!validator.isEmail(data.email)) {
        errors.email = "请填写邮箱"
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "请填写密码"
    }
    if (validator.isEmpty(data.passwordConfirmation)) {
        errors.password = "请填确认密码"
    }
    if (!validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = "两次密码不相同"
    }
    return {
        errors,
        isValid:_.isEmpty(errors)
    }
}

router.post("/",(req, res) => {
    const { errors,isValid } = validatorInput(req.body)
    let sql =`insert into user values (null,?,?,?,?)`
    let arr = [req.body.username, req.body.email, req.body.passwordConfirmation,req.body.password]
    if (isValid) {
        sqlFn(sql,arr,(data) => {
            if (data.affectedRows){
                res.send({success:true})
            }else {
                res.status(400).json({
                    error:"注册失败"
                })
            }
        })
    }else {
        res.status(400).json(errors)
    }
})

module.exports = router
