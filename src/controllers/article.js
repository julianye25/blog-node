import {
  createArticleService,
  getAllArticlesService,
} from '../services/article.js';

createArticleService;

const createArticleController = async (req, res) => {
  try {
    const data = req.body;

    const createArticle = await createArticleService(data);
    res.status(createArticle.statusCode).json(createArticle.message);
  } catch (error) {
    res.status(createArticle.statusCode).json(createArticle.message);
  }
  // data
};

const getAllArticlesController = async (req, res) => {
  try {
    const getArticles = await getAllArticlesService();

    res.status(getArticles.statusCode).json(getArticles.content);
  } catch (error) {
    console.log(error);
    res.status(getArticles.statusCode).json(getArticles.content);
  }
};

export { createArticleController, getAllArticlesController };
