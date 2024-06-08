import validator from 'validator';
import Article from '../models/Article.js';

const createArticleService = async (data) => {
  try {
    let validateTitle =
      !validator.isEmpty(data.title) &&
      validator.isLength(data.title, { min: 5, max: undefined });
    let validateContent = !validator.isEmpty(data.content);

    if (!validateTitle || !validateContent) {
      throw new Error('info not validate');
    }

    console.log(data);

    const createArticle = new Article(data);
    await createArticle.save();

    return {
      statusCode: 201,
      message: { createArticle, status: 'success' },
    };
  } catch (error) {
    return {
      statusCode: 400,
      message: { status: 'Error' },
    };
  }
};

const getAllArticlesService = async () => {
  try {
    const getArticles = await Article.find();
    return {
      statusCode: 200,
      content: getArticles,
    };
  } catch (error) {
    return {
      statusCode: 200,
      content: error,
    };
  }
};

export { createArticleService, getAllArticlesService };
