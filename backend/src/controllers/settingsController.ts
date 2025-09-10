import { Request, Response } from 'express';
import User from '../models/user';

export class SettingsController {
    async getSettings(req: Request, res: Response) {
        try {
            const userId = req.user.id; // Assuming user ID is available in req.user
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({
                optimisedResponse: user.optimisedResponse,
                state: user.state
            });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }

    async setSettings(req: Request, res: Response) {
        try {
            const userId = req.user.id; // Assuming user ID is available in req.user
            const { optimisedResponse, state } = req.body;

            const user = await User.findByIdAndUpdate(userId, { optimisedResponse, state }, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'Settings updated successfully', user });
        } catch (error) {
            res.status(500).json({ message: 'Server error', error });
        }
    }
}