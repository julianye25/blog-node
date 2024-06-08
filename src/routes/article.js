import express from 'express';
const router = express.Router();
import {
  createArticleController,
  deleteArticleController,
  getAllArticlesController,
  getOneArticleController,
  updateArticleController,
} from '../controllers/article.js';

router.post('/articles', createArticleController);
router.get('/articles', getAllArticlesController);
router.get('/article/:id', getOneArticleController);
router.delete('/article/:id', deleteArticleController);
router.put('/article/:id', updateArticleController);

export default router;
