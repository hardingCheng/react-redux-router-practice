const _ = require("lodash")
const validator = require('validator');

const validatorInput = (data) => {
    let errors = {}
    if (validator.isEmpty(data.username)) {
        errors.username = "请输入用户名字"
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "请输入密码"
    }
    return {
        errors,
        isValid:_.isEmpty(errors)
    }
}
export default validatorInput
