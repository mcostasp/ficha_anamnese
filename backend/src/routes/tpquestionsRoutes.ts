import { Router } from "express";
import tpquestionsController from "../controllers/tpquestionsController";

const router = Router();

router.post('/', tpquestionsController.create);
router.get('/', tpquestionsController.getAll);
router.get('/:id', tpquestionsController.getById);
router.put('/:id', tpquestionsController.update);
router.delete('/:id', tpquestionsController.delete);
router.delete('/', tpquestionsController.deleteAll);

export default router;