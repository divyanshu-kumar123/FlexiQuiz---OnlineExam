// const exp = require('constants')
const express = require('express')
const path = require('path')
var bodyParser = require('body-parser');
const session = require('express-session');
var ejs = require('ejs')


var mongoClient = require('mongodb').MongoClient;

const app = express()
app.set('view engine', 'ejs');

var url = "mongodb://localhost:27017/";
app.use(session({

    secret: 'test',

    saveUninitialized: true,

    resave: true }));


app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/flexi', (req, res) => {
    var user_name = req.body.username;
    var user_email = req.body.email;
    var user_pswrd = req.body.pswrd;
    // var user_massage = req.body.massage;
    // console.log(user_email,user_name,user_massage)
    mongoClient.connect(url, function (err, db) {
        if (err) throw err;



        var dbCon = db.db("registration");




        var depObj = { 'name': user_name, 'email': user_email, 'pswrd': user_pswrd }





        var dbscollection = dbCon.collection("user")



        dbscollection.insertOne(depObj, function (err, res) {
            if (err) throw err;
            console.log(" record inserted");
            db.close();
            
        });
        res.redirect("/index.html")
    });
    
})

var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
mongoClient.connect(url,function(err,db){
if(err) throw err;
var dbCon = db.db("registration");
dbCon.collection("user").find({}).toArray(function(err,res){
if(err) throw err;
console.log(res);
module.exports= res
// db.close();
});
}); 

app.post('/login', (req, res) => {

    var user_password = req.body.pswrd1;

    var user_name = req.body.name1;

    var use = {

        "email": user_name,

        "pswrd": user_password

    }

    mongoClient.connect(url, function (err, db) {

        if (err) throw err;



        var dbo = db.db("registration");

        dbo.collection("user").findOne(use, function (err, result) {

            if (err) throw err;

            console.log('running')

            console.log(result);

            if (!result) {
                res.redirect('/errorpage.html')
                // res.send("Incorrect username or password")

            } else {
                req.session.name = result.name;
                res.redirect('/homepage.html')
                // res.redirect('/homepage.html')

                // res.render('home.ejs', {

                //     username: result.name

                // })

            }

            db.close();

        })



    })

})
app.post('/marks' , (req, res) => {
    var q1 = req.body._1;
    var q2 = req.body._2;
    var q3 = req.body._3;
    var q4 = req.body._4;
    var q5 = req.body._5;
    var q6 = req.body._6;
    var q7 = req.body._7;
    var q8 = req.body._8;
    var q9 = req.body._9;
    var q10 = req.body._10;
    var q11 = req.body._11;
    var q12 = req.body._12;
    var q13 = req.body._13;
    var q14 = req.body._14;
    var q15 = req.body._15;
    var q16 = req.body._16;
    var q17 = req.body._17;
    var q18 = req.body._18;
    var q19 = req.body._19;
    var q20 = req.body._20;
    var q21 = req.body._21;
    var q22 = req.body._22;
    var q23 = req.body._23;
    var q24 = req.body._24;
    var q25 = req.body._25;

var a=0
    if (q1 == "u") {a++}
    if (q2 == "e") {a++}
    if (q3 == "r") {a++}
    if (q4 == "e") {a++}
    if (q5 == "r") {a++}
    if (q6 == "t") {a++}
    if (q7 == "u") {a++}
    if (q8 == "u") {a++}
    if (q9 == "t") {a++}
    if (q10 == "r") {a++}
    if (q11 == "t") {a++}
    if (q12 == "u") {a++}
    if (q13 == "u") {a++}
    if (q14 == "e") {a++}
    if (q15 == "t") {a++}
    if (q16 == "u") {a++}
    if (q17 == "e") {a++}
    if (q18 == "t") {a++}
    if (q19 == "t") {a++}
    if (q20 == "r") {a++}
    if (q21 == "t") {a++}
    if (q22 == "e") {a++}
    if (q23 == "t") {a++}
    if (q24 == "u") {a++}
    if (q25 == "r") {a++}

    var data = {
        user: req.session.name,
        marks : a
    }

    mongoClient.connect(url, function (err, db) {
        if(err) throw err
        var dob = db.db("marks")
        var dbscollection = dob.collection("st_marks")
        dbscollection.insertOne(data, function (err, res) {
       
            if (err) throw err;

            console.log(" record inserted");

            db.close();
        })
    if (a<=10){
        res.redirect("/exam5ht.html")
    }else{
        res.redirect("/exam4ht.html")

    }
    })
})



app.get('/getMarks', (req, res) => {
    var curentuse = req.session.name;
    var use = { 'user': curentuse }
    mongoClient.connect(url, (err, db) => {
        if (err) throw err;
        var dob = db.db("marks");
        dob.collection("st_marks").find(use).toArray( (err, result) => {
         if(err) throw (err)
         console.log( result)    
         var data={
              stm:result[0].marks
            }
            res.render('report', data)
        })
            // db.close();
    })
})



app.listen(7767, () => {
    console.log("No error found")
})




