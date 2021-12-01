let express=require("express")
const conectDb = require("./config/conectDb")
let user = require("./routes/user")
let app=express()
app.use(express.json())
app.use("/user",user)
conectDb()

let PORT=process.env.PORT||5000
app.listen(PORT,err=>err?console.log(err):console.log(`the server is runing ${PORT}`))