require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
var favicon = require('serve-favicon');
const path = require("path")
const sendMail = require('./mail')
const app = express();
app.set('view engine', 'ejs')

const sendMailContact = require("./contactemail")


// app.use(express.static('public'))
app.use(express.static(__dirname + "/public"));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));


const d = new Date();
const finalDate = d.getFullYear();

// app.get('*', function(req, res) {  
//     res.redirect('https://' + req.headers.host + req.url);
// });
// app.enable('trust proxy')
// app.use((req, res, next) => {
//     req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
// })
app.post('/product-checkout', (req, res)=> {
    // res.json({message: "Message recieved"})
    // console.log("something got posted")-
    // console.log(data);
    const {email, subject, text} = req.body;   
    console.log('Data: ', req.body);

    sendMail(email, subject, text, function(err,data){
        if(err) {
          res.status(500).json({ message: 'Internal Error'});
        } else {
          res.json({message: "Email has been sent!!"})
        }
      })
})

app.post('/contact', (req, res)=> {
    const {email, subject, text} = req.body;
    console.log("Contact Data: ", req.body);

    sendMailContact(email, subject, text, function(err, data){
        if(err) {
            res.status(500).json({ message: 'Internal error'});
        
        } else {
            res.json({message: 'Email has been sent!!'})
        }
    })
})

app.get('/', (req,res)=> {
    res.render('index', {finalDate:finalDate})
})
app.get('/about', (req, res)=>{
    res.render('about', {finalDate:finalDate})
})

app.get('/gridshop', (req, res)=> {
    res.render('pages/gridshop', {finalDate:finalDate})
})
app.get('/sitemap', (req,res) => {
    res.sendFile('sitemap.xml')
})
app.get('/cart', (req, res)=> {
    res.render('cart', {finalDate:finalDate})
})
app.get('/contact', (req, res)=> {
    res.render('contact', {finalDate:finalDate})

})

app.get('/product-checkout', (req, res)=> {
    res.render('product-checkout',{finalDate:finalDate})
})


app.listen(process.env.PORT || 5000, ()=> {
    console.log('HERBAL SERVER IS RUNNING!')
})
