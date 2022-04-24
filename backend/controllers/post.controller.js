import asyncHandler from 'express-async-handler';
import * as postService from '../services/post.service.js';

/**
 * @description Create a new post
 * @route POST /api/v1/posts
 * @access Public
 */

export const createPost = asyncHandler(async (req, res, next) => {
  try {
    const { _id } = req.user ?? {};

    const body = {
      ...req.body,
      userId: _id,
    };

    const data = {
      body,
      response: res,
    };

    const post = await postService.createPost(data);

    return res.status(201).json({
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description Get all posts
 * @route GET /api/v1/posts
 * @access Public
 */

export const getPosts = asyncHandler(async (req, res, next) => {
  try {
    const data = {
      response: res,
    };

    const posts = await postService.getPosts(data);

    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description Get a post by id
 * @route GET /api/v1/posts/:id
 * @access Public
 *
 * */

export const getPostById = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = {
      id,
      response: res,
    };

    const post = await postService.getPostById(data);

    return res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description get my posts
 * @route GET /api/v1/posts/myposts
 * @access Private
 */

export const getMyPosts = asyncHandler(async (req, res, next) => {
  try {
    const { _id } = req.user ?? {};

    const data = {
      userId: _id,
      response: res,
    };

    const posts = await postService.getMyPosts(data);

    return res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    next(error);
  }
});
