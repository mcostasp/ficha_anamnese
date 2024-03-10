import { Router } from "express";
import customerController from "../controllers/customerController";
//import { autheticateJWT } from "../middleware/authMiddleware";

const router = Router();


router.post('/', customerController.create);
router.get('/', customerController.getAll);
router.get('/:id', customerController.getById);
router.put('/:id', customerController.update);
router.delete('/:id', customerController.delete);
//router.delete('/', customerController.deleteAll);

export default router;