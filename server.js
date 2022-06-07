const express = require("express");
const path = require("path");
const rootRouter = require("./src/router/rootRouter");
const movieRouter = require("./src/router/movieRouter");

const app = express();

app.engine("ejs",require('ejs').renderFile); //ejs > html 엔진 변경
app.set("view engine", "ejs") // view engine을 html로 세팅
app.set("views", process.cwd() + "/src/views"); // view engine path setting

const PORT = 3030;

app.use(express.static(path.join(__dirname,'/src/views/public')));// server에서 접근 가능하도록 path 설정.

app.use('/', rootRouter); // router setting
app.use('/movie', movieRouter);

app.listen(PORT,(err) => {
    if(err){
        console.error(err);
    } 
    else
        console.log(`Server Listening http://localhost:${PORT}`)
});

module.exports = app;