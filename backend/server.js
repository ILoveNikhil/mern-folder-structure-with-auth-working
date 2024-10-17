import { app } from "./app.js";
import { connectDB } from "./database/db.js";
import { TryCatch } from "./middlewares/tryCatch.js";

//connect database - mongodb 
connectDB()


// server is working
app.get("/", (req, res) => {
    res.send(`<h1> Server is Working </h1>`);
});


const port = process.env.PORT ?? 3000
app.listen(port, TryCatch((req,res,next)=>{
  console.log(`server is working on http://localhost:${port}`)
}));