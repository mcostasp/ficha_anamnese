import { Router } from "express";
import customerController from "../controllers/customerController";
//import { autheticateJWT } from "../middleware/authMiddleware";

const router = Router();

router.post('/', customerController.create);

export default router;