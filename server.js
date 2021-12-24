let express=require("express")
const conectDb = require("./config/conectDb")
let user = require("./routes/user")
let product = require("./routes/product")
let cart = require("./routes/cart")

let app=express()
app.use(express.json())
app.use("/user",user)
app.use("/product",product)
app.use("/cart",cart)
conectDb()

let PORT=process.env.PORT||5000
app.listen(PORT,err=>err?console.log(err):console.log(`the server is runing ${PORT}`))