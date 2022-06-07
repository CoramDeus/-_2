const express = require("express");
const rootRouter = express.Router(); 
const Home = require("../controller/rootController");
const Home2 = require("../controller/rootController");

rootRouter.get('/',Home);
rootRouter.get('/video',Home2);

rootRouter.get('/login', (req,res,next) => {
    res.render('login')
});

rootRouter.get('/about', (req,res,next) => {
    res.render('about')
});

rootRouter.get('/recommend', (req,res,next) => {
    res.render('recommend')
});

rootRouter.get('/rank', (req,res,next) => {
    res.render('rank')
});

rootRouter.get('/evaluation', (req,res,next) => {
    res.render('evaluation')
});

module.exports = rootRouter;
