import { Router } from 'express';
import * as friendController from '../controllers/friend.controller.js';
import * as friendValidator from '../validators/friend.validator.js';
import { protect } from '../middlewares/auth.middlewares.js';

const router = Router();

router
  .route('/')
  .get(protect, friendController.getMyFriends)
  .post(protect, friendValidator.addFriend, friendController.addFriend);

router
  .route('/:id')
  .get(protect, friendController.getFriendOfUser)
  .delete(protect, friendController.removeFriend);

export default router;
