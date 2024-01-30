import bodyParser from "body-parser";
import { Express } from "express";
import { rideRequest, cancelRide } from "../Controllers/Rider";
const router = Express.Router();
//body parser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
//code for rides available

//code for sending ride request


router.post("/request", rideRequest);
//code for canceling ride request
router.post("/cancel/:rideId", cancelRide);


export default router;
