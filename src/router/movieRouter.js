const express = require("express");
const movieRouter = express.Router(); 

movieRouter.get('/', (req,res,next) => {
    res.render('about')
});
movieRouter.get('/recommend', (req,res,next) => {
    res.render('recommend')
});
movieRouter.get('/rank', (req,res,next) => {
    res.render('rank')
});
movieRouter.get('/evaluation', (req,res,next) => {
    res.render('evaluation')
});
module.exports = movieRouter;