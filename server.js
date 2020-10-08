var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const mysql = require('mysql');
const TwinBcrypt = require('twin-bcrypt')
const jwt = require('jsonwebtoken')
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });


const connection = mysql.createPool({
    host: `localhost`,
    user: `root`,
    password: ``,
    database: `web_db`
})

// connection.connect(function (err) {
//     if (err) throw err;

//     console.log("Connected!");
// })
async function Login(email, password) {
    console.log(email, password);
    let promise = new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users WHERE email = ?`, email, (err, res) => {
            console.log(res);
            if (err) {
                console.log(err);
                console.log('err');
                resolve({
                    open: true,
                    msg: "รหัสไม่ถูกต้อง",
                    severity: "error"
                })
            } else if (res.length !== 0) {
                TwinBcrypt.compare(password, res[0].password, function (tb) {

                    console.log(tb);
                    if (tb) {
                        console.log({
                            open: true,
                            msg: "เข้าสู่ระบบแล้ว",
                            severity: "success"
                        });

                        let token = jwt.sign({
                            status: true
                        }, "LOGIN")
                        resolve({
                            open: true,
                            msg: "เข้าสู่ระบบแล้ว",
                            severity: "success",
                            token: token
                        })
                    } else {
                        console.log({
                            open: true,
                            msg: "รหัสไม่ถูกต้อง",
                            severity: "error"
                        });
                        resolve({
                            open: true,
                            msg: "รหัสไม่ถูกต้อง",
                            severity: "error"
                        })

                    }
                })

            } else {
                console.log("null");
                resolve({
                    open: true,
                    msg: "รหัสไม่ถูกต้อง",
                    severity: "error"
                })
            }
        })

    })
    return await promise
}

async function Dashboard(token) {
    let promise = new Promise((resolve, reject) => {
        jwt.verify(token, "LOGIN", (error, decode) => {
            if (error) {
                resolve({ status: false })
                // console.log(error);
            } else {
                // console.log(decode);
                resolve({ status: true })
            }
        })
    })

    return await promise
}

io.on('connection', (socket) => {

    console.log('a user connected');

    // เมื่อ Client ตัดการเชื่อมต่อ
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })

    socket.on('login', (data) => {
        Login(data.email, data.password).then(_data => {
            socket.emit('login', _data);
        })

    })

    socket.on('dashboard', (token) => {
        console.log(token);
        Dashboard(token).then(_token => {
            socket.emit('dashboard', _token);
        })
    })


});

http.listen(9000, () => {
    console.log('listening on *:9000');
});