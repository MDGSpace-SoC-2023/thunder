import bodyParser from "body-parser";
import { Express } from "express";
const router = Express.Router();

//body parser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
//code for rides available

//code for sending ride request
rides = [];

router.post("/request", (req , res)=>{

})
//code for canceling ride request