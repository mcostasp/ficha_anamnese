import { Router } from "express";
import serviceController from "../controllers/serviceController";
//import { autheticateJWT } from "../middleware/authMiddleware";

const router = Router();


router.post('/', serviceController.create);
router.get('/', serviceController.getAll);
router.get('/:id', serviceController.getById);
router.delete('/:id', serviceController.delete);

export default router;