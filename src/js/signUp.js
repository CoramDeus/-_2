const Connection = require("root@127.0.0.1:3306");

function checkPw(){
    var id = $('#id').val();
    var email = $('#email').val();
    var pw = $('#password').val();
    var cpw = $('password_a').val();

    if(id.length < 4 || id.length >= 20) alert("옳바른 ID가 아닙니다.");
    else if (pw.length < 4 || cpw.length < 4) alert("비밀번호는 4자 이상 입력해주세요");
    else if (pw!=cpw) alert ("비밀번호가 일치하지 않습니다.");
    else {
        $.ajax({
            url : "/signUp",
            type : "POST",
            data : {
                pw : pw,
                id : id,
                email : email
            },
            success : function (data){
                if(data == "중복ID"){
                    alert("이미 존재하는 ID입니다,");
                }
                else if(data == "성공"){
                    alert("회원가입이 완료되었습니다.");
                }
            }
        })
    }
}

router.post('/',async function(req, res, next){
    var id = req.body.id;
    var email = req.body.email;
    var password = req.body.pw;

    const hashPassword = crypto.createHash('sha512').update(password + salt).digest('hex');
    var query = "SELECT user_id FROM Movie where user_id = '"+id+"';";
    Connection.query(query, function(err,rows){
        if(rows.length == 0){
            var sql = {
                email : email,
                user_id : user_id,
                password : hashPassword,
                salt : salt
            };

            var query = Connection.query('insert into Movie set ?',sql,function(err,rows){
                if(err) throw err;
                else {
                    res.send("성공");
                }
            });
        }
        else {
            res.send("중복 ID");
        }
    });
});