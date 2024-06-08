import {
  createArticleService,
  deleteArticleService,
  getAllArticlesService,
  getOneArticleService,
  updateArticleService,
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

const getOneArticleController = async (req, res) => {
  try {
    let id = req.params.id;
    const getOne = await getOneArticleService(id);

    res.status(getOne.statusCode).json(getOne.content);
  } catch (error) {
    res.status(getOne.statusCode).json(getOne.content);
  }
};

const deleteArticleController = async (req, res) => {
  try {
    let { id } = req.params;

    if (!id) {
      res.status(400).json('id not provaider');
    }

    const deleteArticle = await deleteArticleService(id);

    res.status(deleteArticle.statusCode).json(deleteArticle.content);
  } catch (error) {
    res.status(deleteArticle.statusCode).json(deleteArticle.content);
  }
};

const updateArticleController = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;

    const updateArticle = await updateArticleService(data, id);

    res.status(updateArticle.statusCode).json(updateArticle.content);
  } catch (error) {
    res.status(updateArticle.statusCode).json(updateArticle.content);
  }
};

export {
  createArticleController,
  getAllArticlesController,
  getOneArticleController,
  deleteArticleController,
  updateArticleController,
};
