const express = require("express");
const loginRouter = express.Router(); 

loginRouter.get('/', (req,res,next) => {
    res.render('login')
});

module.exports = loginRouter;