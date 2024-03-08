import { Router } from "express";
import questionsController from "../controllers/questionsController";
//import { autheticateJWT } from "../middleware/authMiddleware";

const router = Router();

router.post('/', questionsController.create);
router.get('/', questionsController.getAll);
router.get('/:id', questionsController.getById);
router.put('/:id', questionsController.update);
router.delete('/:id', questionsController.delete);
router.delete('/', questionsController.deleteAll);

export default router;