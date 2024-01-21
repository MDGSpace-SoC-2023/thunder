import { Express } from "express";
import bodyParser from "body-parser";
import { acceptRideRequest, cancelRideRequest } from "../Controllers/Driver";
const router = Express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const Driver = [];

router.post("/acceptRideRequest/:driverId", acceptRideRequest);
router.post("/cancelRideRequest/:driverId", cancelRideRequest);


export default router