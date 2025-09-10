import { Router } from 'express';
import { DataEntryController } from '../controllers/dataEntryController';

const router = Router();
const dataEntryController = new DataEntryController();

router.post('/setData', dataEntryController.setData.bind(dataEntryController));
router.get('/getAllData', dataEntryController.getAllData.bind(dataEntryController));

export default router;