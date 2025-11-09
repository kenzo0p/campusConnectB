import dotenv from "dotenv"
dotenv.config()
import express from "express"
import chalk from "chalk";
import morgan from 'morgan'
import hpp from "hpp"
import helmet from "helmet";
import cors from "cors"
import limiter from "./src/utils/rateLimitter.js";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT;
const app = express();

//security
app.use(helmet());
app.use(hpp());
app.use("/api" ,limiter);

if(process.env.NODE_ENV === "dev"){
    app.use(morgan("dev"));
}

//middlwares
app.use(express.json({limit : "10kb"}));
app.use(express.urlencoded({extended : true ,limit : "10kb"}));
app.use(cookieParser());


//cors config
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on ${chalk.bgGreenBright(`http://localhost:${PORT}/`)}`);
})