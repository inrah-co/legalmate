import { Router } from 'express';
import { UserQueryController } from '../controllers/userQueryController';

const router = Router();
const userQueryController = new UserQueryController();

router.post('/askAI', userQueryController.askAI);

export default router;