import { Router } from 'express';
import { SettingsController } from '../controllers/settingsController';

const router = Router();
const settingsController = new SettingsController();

router.get('/', settingsController.getSettings.bind(settingsController));
router.post('/', settingsController.setSettings.bind(settingsController));

export default router;