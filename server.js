let express=require("express")
const conectDb = require("./config/conectDb")
let user = require("./routes/user")
let product = require("./routes/product")
let cart = require("./routes/cart")
const upload=require('./routes/uploads')
let app=express()
app.use(express.json())
app.use("/user",user)
app.use("/product",product)
app.use("/cart",cart)
conectDb()

app.use('/uploads',express.static('uploads'))
app.use("/product/uploads",upload);

let PORT=process.env.PORT||5000
app.listen(PORT,err=>err?console.log(err):console.log(`the server is runing ${PORT}`))