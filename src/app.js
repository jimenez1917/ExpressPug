const express = require('express');
const ProductsManager= require('./Manager/ProductsManager')
const ProductsService = new ProductsManager();
const app = express();



app.set('views',__dirname + '/views')
app.set('view engine','pug')
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/',(req,res)=>{
    res.render('home')
})


app.post('/productos',(req,res) =>{
    let product =req.body;
    ProductsService.add(product).then(products=>res.render('productsview',{products}));
})

const PORT = 8080;
const server = app.listen(PORT, ()=>console.log(`listening on ${PORT}`));