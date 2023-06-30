const model = require('../model/index')
const controller = {}




controller.getAll = async function(req,res) {

    console.log(model.user)
    const userData = await model.user.findAll();
    return res.json({data: userData})
}


module.exports = controller