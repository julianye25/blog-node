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

const getOneArticleService = async (id) => {
  try {
    const getOne = await Article.findById(id);

    return {
      statusCode: 200,
      content: getOne,
    };
  } catch (error) {
    return {
      statusCode: 404,
      content: 'not found',
    };
  }
};

const deleteArticleService = async (id) => {
  try {
    const getOne = await Article.findById(id);

    console.log(getOne);

    if (!getOne) {
      return {
        statusCode: 400,
        content: 'not found',
      };
    }
    const deleteArticle = await Article.findByIdAndDelete(id);

    if (!deleteArticle) {
      return {
        statusCode: 400,
        content: 'not found',
      };
    }

    return {
      statusCode: 200,
      content: 'Success',
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      content: 'internal error',
    };
  }
};

const updateArticleService = async (data, id) => {
  try {
    const { title, content } = data;

    if (!title || !content) {
      return {
        statusCode: 400,
        content: 'info not found s',
      };
    }

    const findOne = await Article.findById(id);

    if (!findOne) {
      return {
        statusCode: 500,
        content: 'not found',
      };
    }
    const updateArticle = await Article.findByIdAndUpdate(id, {
      title: title,
      content: content,
    });

    return {
      statusCode: 200,
      content: updateArticle,
    };
  } catch (error) {
    return {
      statusCode: 500,
      content: 'internal error',
    };
  }
};

export {
  createArticleService,
  getAllArticlesService,
  getOneArticleService,
  deleteArticleService,
  updateArticleService,
};
