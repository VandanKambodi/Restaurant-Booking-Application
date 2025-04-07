import app from "./app.js";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
dotenv.config({ path: "./.env" });
dbConnection();

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})
