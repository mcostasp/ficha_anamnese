import { Router } from "express";
import formsController from "../controllers/formsController";
//import { autheticateJWT } from "../middleware/authMiddleware";

const router = Router();


router.post('/', formsController.create);
router.get('/', formsController.getAll);
router.get('/:id', formsController.getById);
router.put('/:id', formsController.update);
router.delete('/:id', formsController.delete);
router.delete('/', formsController.deleteAll);

export default router;