const express = require('express')
const router = express.Router()
const _ = require("lodash")
const validator = require('validator');
const jwt = require('jsonwebtoken')
const sqlFn = require('../mysql')
const config = require("../config")
router.post('/', (req, res) => {
    const { username, password } = req.body
    const sql = `select * from user where username = ? and password = ?`
    const arr = [username, password]
    sqlFn(sql,arr,(data) => {
        if (data.length>0){
            const token = jwt.sign({
                id:data[0].id,
                username:data[0].username
            },config.jwtSecret )
            res.send(token )
        }else {
            res.status(401).json({
                error:{
                    form:"用户名密码错误"
                }
            })
        }
    })
})

module.exports = router
