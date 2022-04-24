import Post from '../models/post.model.js';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

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
    }).sort({
      createdAt: -1,
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
    }).sort({
      createdAt: -1,
    });

    return posts;
  } catch (error) {
    throw error;
  }
};

export const getFriendPosts = async ({ userId, response }) => {
  const query = [
    {
      $lookup: {
        from: 'friends',
        localField: 'userId',
        foreignField: 'userId',
        as: 'friends',
      },
    },
    {
      $unwind: {
        path: '$friends',
      },
    },
    {
      $match: {
        visibility: 'friends',
        'friends.friendId': ObjectId(userId),
      },
    },
    {
      $project: {
        friends: 0,
      },
    },
  ];

  try {
    const posts = await Post.aggregate(query);

    return posts;
  } catch (error) {
    throw error;
  }
};
