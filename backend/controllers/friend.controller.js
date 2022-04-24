import asyncHandler from 'express-async-handler';
import * as friendService from '../services/friend.service.js';

/**
 * @description Add a new friend
 * @route POST /api/v1/friends
 * @access Public
 */

export const addFriend = asyncHandler(async (req, res, next) => {
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

    const friend = await friendService.addFriend(data);

    return res.status(201).json({
      success: true,
      data: friend,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description Get my friends
 * @route GET /api/v1/friends
 * @access Public
 */

export const getMyFriends = asyncHandler(async (req, res, next) => {
  try {
    const { _id } = req.user ?? {};

    const data = {
      userId: _id,
      response: res,
    };

    const friends = await friendService.getMyFriends(data);

    return res.status(200).json({
      success: true,
      data: friends,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description Get all friends of a user
 * @route GET /api/v1/friends/:id
 * @access Public
 */

export const getFriendOfUser = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = {
      userId: id,
      response: res,
    };

    const friends = await friendService.getFriendOfUser(data);

    return res.status(200).json({
      success: true,
      data: friends,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * @description remove a friend
 * @route DELETE /api/v1/friends/:id
 * @access Public
 */

export const removeFriend = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = {
      userId: id,
      response: res,
    };

    const friend = await friendService.removeFriend(data);

    return res.status(200).json({
      success: true,
      data: `Friend removed successfully`,
    });
  } catch (error) {
    next(error);
  }
});
