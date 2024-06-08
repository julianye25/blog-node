import express from 'express';
const router = express.Router();
import {
  createArticleController,
  getAllArticlesController,
} from '../controllers/article.js';

router.post('/articles', createArticleController);
router.get('/articles', getAllArticlesController);

export default router;
