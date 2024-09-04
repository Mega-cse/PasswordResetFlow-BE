import express from 'express';
import cors from 'cors'
import dotenv from "dotenv"
import connectDB from './Database/config.js';
import routes from './Routers/router.js'

dotenv.config()

const app = express();

connectDB()
const port=process.env.PORT;
app.use(cors())
app.use(express.json())
app.use('/api',routes)
// app.get('/', (req, res) => {
//     res.status(200).send("example")

// })
app.get('/',(req,res)=>{
    res.send(`<h1>Welcome to Authentication and Authorization</h1>`)
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})