import Post from '../models/post.model.js';

export const createPost = async ({ body, response }) => {
  try {
    const post = await Post.create(body);

    return post;
  } catch (error) {
    throw error;
  }
};

export const getPosts = async ({ response }) => {
  try {
    const posts = await Post.find({
      visibility: 'public',
    });

    return posts;
  } catch (error) {
    throw error;
  }
};

export const getPostById = async ({ id, response }) => {
  try {
    const post = await Post.findById(id);

    if (!post) {
      response.status(404);
      throw new Error('Post not found');
    }

    return post;
  } catch (error) {
    throw error;
  }
};

export const getMyPosts = async ({ userId, response }) => {
  try {
    const posts = await Post.find({
      userId,
    });

    return posts;
  } catch (error) {
    throw error;
  }
};
