var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var corsOptions = {
    origin: "http://localhost:3001"
};
app.use(cors(corsOptions));
app.use(express.json());




// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'sirket',
    port: 3306,
    password: 'Hasanmutlu12?',
    database: 'sirket'
});


// connect to database
dbConn.connect();


// Retrieve all users 
app.get('/startup', function (req, res) {

    dbConn.query('SELECT * FROM startup ', function (error, results, fields) {
        
        if (error) {
            throw error;
        }

        req.header("Access-Control-Allow-Origin", "*");
        req.header("Access-Control-Allow-Headers", "X-Requested-With");
        req.header('Content-Type', 'application/json');
        req.json = true;

        console.log("cagrildi...");
        console.log(results);

        return res.send(results);
    })
});


// Retrieve startup with sirketAdi 
app.get('/startup/:sirketAdi', function (req, res) {

    let sirketAdi = req.params.sirketAdi;

    if (!sirketAdi) {
        return res.status(400).send({ error: true, message: 'Please provide sirketAdi' });
    }

    dbConn.query('SELECT * FROM startup WHERE sirketAdi=?', sirketAdi, function (error, results, fields) {
        if (error) throw error;

        return res.send(results);
    });
});

app.post('/add-startup', function (req, res) {

    console.log("sirket adi: " + req.body.sirketAdi);
    
    const sirketAdi = req.body.sirketAdi;
    const fikir = req.body.fikir;
    const yatirimDegeri = req.body.yatirimDegeri;
    const kurucusu = req.body.kurucusu;
    const sektor = req.body.sektor;
    const kurulusu = req.body.kurulusu;
    


    dbConn.query("INSERT INTO startup SET ? ", {
        sirketAdi: sirketAdi, fikir: fikir, yatirimDegeri: yatirimDegeri, kurucusu: kurucusu, sektor:sektor, kurulusu: kurulusu
    
    }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, messege: 'New add has been created successfully.' });
    });



});

// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;