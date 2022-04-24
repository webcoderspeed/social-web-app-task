import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import * as userValidator from '../validators/user.validator.js';
import { protect } from '../middlewares/auth.middlewares.js';

const router = Router();

router.route('/').post(userValidator.signUp, userController.signUp);

router.route('/login').post(userValidator.signIn, userController.signIn);

router.route('/profile').get(protect, userController.getMyProfile);

export default router;
