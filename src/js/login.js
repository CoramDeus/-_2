const Connection = require("root@127.0.0.1:3306");
const app = require("../../server");
const loginRouter = require("../router/loginRouter");
loginRouter.post('/login',)


var id = req.body.id;
var pw = req.body.pw;

var query = "select salt, password from Movie where user_id = '"+id+"';"
console.log(query);
Connection.query(query, function(err,rows){
    if(err) throw err;
        else{
            if(rows.length == 0){
                console.log("ID를 다시 확인해주세요")
                res.redirect("/login.ejs")
            }
            else{
                var salt = rows[0].salt;
                var password = rows[0].password;
                const hashPassword = crypto.createHash('sha512').update(pw + salt).digest('hex');
                if(password == hashPassword){
                    console.log("로그인 성공")
                    res.cookie("user",id,{
                        expire: new Data(Data.now() + 900000),
                        httpOnly: true
                    });
                    res.redirect("/login.ejs")
                }
                else{
                    console.log("로그인 실패, 비밀번호 틀림")
                    res.redirect("/login.ejs")
                }
            }
        }
    })