import { Router } from 'express';
import * as postController from '../controllers/post.controller.js';
import * as postValidator from '../validators/post.validator.js';
import { protect } from '../middlewares/auth.middlewares.js';

const router = Router();

router
  .route('/')
  .get(protect, postController.getPosts)
  .post(protect, postValidator.createPost, postController.createPost);

router.route('/myposts').get(protect, postController.getMyPosts);

router.route('/:id').get(protect, postController.getPostById);

export default router;
