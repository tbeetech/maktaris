const express = require("express");
const bodyParser = require("body-parser");
const sendMail = require('./mail')
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static('public'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs')

app.post('/product-checkout', (req, res)=> {
    // res.json({message: "Message recieved"})
    // console.log("something got posted")
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

app.get('/', (req,res)=> {
    res.render('index')
})
app.get('/about', (req, res)=>{
    res.render('about')
})

app.get('/gridshop', (req, res)=> {
    res.render('gridshop')
})

app.get('/cart', (req, res)=> {
    res.render('cart')
})
app.get('/contact', (req, res)=> {
    res.render('contact')

})

app.get('/product-checkout', (req, res)=> {
    res.render('product-checkout')
})


app.listen(PORT, ()=> {
    console.log('HERBAL SERVER IS RUNNING!')
})
