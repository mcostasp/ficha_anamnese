import { Router } from "express";
import formController from "../controllers/formController";
//import { autheticateJWT } from "../middleware/authMiddleware";

const router = Router();


router.post('/', formController.create);
router.get('/', formController.getAll);
router.get('/:id', formController.getById);
router.put('/:id', formController.update);
router.delete('/:id', formController.delete);

export default router;