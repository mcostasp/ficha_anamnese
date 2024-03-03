import { Router } from "express";
import servicesController from "../controllers/servicesController";

const router = Router();

router.post('/', servicesController.create);
router.get('/', servicesController.getAll);
router.get('/:id', servicesController.getById);
router.put('/:id', servicesController.update);
router.delete('/:id', servicesController.delete);
router.delete('/', servicesController.deleteAll);

export default router;