import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs : 15 * 60 *60,
    max : 100,
    message :"Too many request from this IP, Please try again try later."
})

export default limiter;